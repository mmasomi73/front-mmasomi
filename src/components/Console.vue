<template>
    <div tabindex="0" class="bg-mine-shaft-900 font-sans h-screen w-full flex flex-row justify-center items-center px-4">
        <div class="flex flex-col w-full lg:w-1/2">
            <div class="flex flex-col items-start shadow-lg rounded-sm text-alto-200 ltr bg-mine-shaft-800 p-6 " style="font-family: monospace, monospace;">
                <code v-html="keydown.shown"></code>
            </div>
        </div>

    </div>
</template>

<script>
import {onMounted, reactive, watch} from "vue";

export default {
    name: "Console",
    setup() {
        const keydown = reactive({
            is_empty: true,
            to_run: false,
            key: null,
            action: null,
            commands: ['/hire-me', '/menu','/clear', '/about', '/contact'],
            buffer: '',
            history: ['/hire-me','/menu','/clear','/about','/contact'],
            history_index: 0,
            shown: '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /hire-me</span></div>',
        })

        function KeyUpHandler(e) {
            keydown.to_run = false;
            keydown.is_empty = keydown.history.length === 0;
            //--------= Check Buffer Size
            checkBufferSize();

            //--------= Check Action Keys
            checkActionKeys(e);

            keydown.key = checkKey(e.key);
            keydown.buffer += keydown.key;
            displayHandler();


            if (e.key === 'Delete') {
                deleteAction();
            }
            if (e.key === "Backspace") {
                keydown.buffer = keydown.buffer.slice(0, -1);
                displayHandler();

            }
            if (e.key === "Enter") {
                addToHistory(keydown.buffer);
                keydown.to_run = true;
                if (keydown.buffer === '/hire-me') {
                    appendHelpCommand();
                }
                if (keydown.buffer === '/menu') {
                    showMenu();
                }
                if (keydown.buffer === '/about') {
                    aboutMe();
                }
                if (keydown.buffer === '/contact') {
                    showContact();
                }
                if (keydown.buffer === '/clear') {
                    keydown.shown = '';
                    deleteAction();
                }
                keydown.to_run = false;
                keydown.buffer = "";

            }

            if (e.key === "ArrowUp") {
                keydown.history_index--;
                if (keydown.history_index < 0) {
                    keydown.history_index = 0;
                }
                keydown.buffer = keydown.history[keydown.history_index];
                displayHandler();


            }
            if (e.key === "ArrowDown") {
                keydown.buffer = keydown.history[keydown.history_index];
                keydown.history_index++;
                if (keydown.history_index > keydown.history.length - 1) {
                    keydown.history_index = keydown.history.length - 1;
                }
                displayHandler();
            }
        }

        function checkBufferSize() {
            if (keydown.shown.length > 2048){
                keydown.action = '';
                keydown.buffer = '';
                keydown.key = '';
                keydown.shown = '$>' + keydown.buffer;
            }
        }

        function checkActionKeys(e){
            if (e.key === 'ArrowDown') {
                keydown.action = 'ArrowDown';
            }
            if (e.key === 'ArrowUp') {
                keydown.action = 'ArrowUp';
            }
            if (e.key === 'ArrowLeft') {
                keydown.action = 'ArrowLeft';
            }
            if (e.key === 'ArrowRight') {
                keydown.action = 'ArrowRight';
            }
            if (e.key === '+') {
                keydown.action = '+';
            }
            if (e.key === '-') {
                keydown.action = '-';
            }
            if (e.key === '/') {
                keydown.action = '/';
            }
            if (e.key === 'Delete') {
                keydown.action = "Del";
            }
            if (e.key === 'Alt') {
                keydown.action = 'Alt';
            }
        }

        function displayHandler(){
            if (keydown.is_empty) {
                keydown.shown = showHelpMenu();
            } else {
                if (keydown.to_run){

                }else{
                    keydown.shown = '$> ' + keydown.buffer;
                }
            }
        }

        function addToHistory(command){
            keydown.history.push(command);
            keydown.history_index = keydown.history.length;
        }

        function appendHelpCommand(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="rtl bg-mine-shaft-900 px-4 py-2">';
            keydown.shown += '<br>';
            keydown.shown += 'من ';
            keydown.shown += '<span class="text-alto-200 font-semibold text-mountain-meadow-600">میثم معصومی</span>';
            keydown.shown += ' هستم، <br>';
            keydown.shown += 'من کمی لاراول و ویو بلدم، اگر اینو دیدی یعنی و دنبال برنامه نویس بودی خوشحال میشم باهام تماس بگیرید.';
            keydown.shown += '🤙';
            keydown.shown += '<br>';
            keydown.shown += '<span class="text-alto-200 font-semibold text-mountain-meadow-600">Mmasomi@gmail.com</span>';
            keydown.shown += '</div>';
        }

        function showMenu(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-mine-shaft-900 p-3">';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 font-semibold">/hire-me</div><div class="ml-3"> Show My Skills if You want Hire Me 🤙. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 font-semibold">/clear</div><div class="ml-3"> Clear Screen. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 font-semibold">/menu</div><div class="ml-3"> Show Menu. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 font-semibold">/about</div><div class="ml-3"> My Life Story ☕. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 font-semibold">/contact</div><div class="ml-3"> My Contact Detail 📞. </div>';
            keydown.shown += '</div>';
            keydown.shown += '</div>';
            keydown.shown += '<br>';
        }

        function showHelpMenu(){
            return '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /menu</span></div>';
        }

        function checkKey(key) {
            if (key.length > 1) {
                return '';
            }
            if ((key >= 'a' && key <= 'z')) {
                return key;
            }
            if ((key >= 'A' && key <= 'Z')) {
                return key;
            }
            if ((key >= '0' && key <= '9')) {
                return key;
            }
            if (key === '/' || key === '\'' || key === '\"' || key === '\\' || key === '/' || key === ':' || key === ';') {
                return key;
            }
            if (key === '(' || key === ')' || key === '[' || key === ']' || key === '{' || key === '}' || key === '|') {
                return key;
            }
            if (key === '=' || key === '*' || key === '-' || key === '+' || key === '$' || key === '#' || key === '@') {
                return key;
            }
            if (key === '!' || key === '%' || key === '^' || key === '&') {
                return key;
            }
            if (key === 'Tab') {
                return key;
            }
            if (key === ' ') {
                return key;
            }
            return '';

        }

        function aboutMe(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="rtl bg-mine-shaft-900 px-4 py-2">';
            keydown.shown += '<br>';
            keydown.shown += 'من ';
            keydown.shown += '<span class="text-alto-200 font-semibold text-mountain-meadow-600">میثم معصومی</span>';
            keydown.shown += ' هستم، <br>';
            keydown.shown += 'یک جایی بین دهه بیست و سی زندگیمم.';
            keydown.shown += '<br>';
            keydown.shown += 'ارشد نرم‌افزارم رو از دانشگاه بوعلی گرفتم، کارشناسی شهید رجایی تهران بودم؛ ';
            keydown.shown += '<br>';
            keydown.shown += 'معلم هستم و در حال حاضر توسعه دهنده وبم،';
            keydown.shown += '<br>';
            keydown.shown += 'کمی تجربه دارم و چیزهایی که نمیدونم از چیزهایی که میدونم خیلی بیشتره.';
            keydown.shown += '<br>';
        }

        function showContact(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-mine-shaft-900 p-3">';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 font-semibold">INSTAGRAM</div><div class="ml-3 text-mountain-meadow-600"> @_mmasomi </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 font-semibold">TELEGRAM</div><div class="ml-3 text-mountain-meadow-600"> @mmasomi </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 font-semibold">TWITTER</div><div class="ml-3 text-mountain-meadow-600"> @mmasomi73 </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 font-semibold">GMAIL</div><div class="ml-3 text-mountain-meadow-600"> mmasomi73@gmail.com </div>';
            keydown.shown += '</div>';
            keydown.shown += '</div>';
            keydown.shown += '<br>';
        }

        function deleteAction(){
            keydown.is_empty = true;
            keydown.action = '';
            keydown.buffer = '';
            keydown.key = '';
            displayHandler();
        }

        watch(() => keydown.action, (currentValue, oldValue) => {
            setTimeout(() => {
                keydown.action = '';
            }, 500);
        });


        onMounted(() => {
            document.addEventListener("keyup", function (e) {
                KeyUpHandler(e);
            });
            document.addEventListener('contextmenu', event => event.preventDefault());

            keydown.history_index = keydown.history.length;
            let logo = `&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&...............&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&................&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&/...............#&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&................&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..................,&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&.................%&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&...........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&.......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&.....&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&....#&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&....(&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&%......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&.......&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&........&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&......(&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,.....&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&..&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&`
            console.log("%c%s", 'background: #222; color: #bada55;;', logo);
            console.log("%c%s", 'background: #222; color: #bada55;font-size: 25px;padding:2px 30px;', 'سلام؛ چقدر خوبه که اینو میخونی');
            console.log('%c%s', 'background: #222; color: #bada55;padding:2px 8px;direction: rtl;',' من میثم معصومی هستم،');
            console.log('%c%s', 'background: #222; color: #bada55;padding:2px 8px;direction: rtl;',' کمی برنامه نویسی بلدم، ');
            console.log('%c%s', 'background: #222; color: #bada55;padding:2px 8px;direction: rtl;',' دنبال توسعه دهنده لاراول و ویو هستی؟ ');
            console.log('%c%s', 'background: #222; color: #bada55;padding:2px 8px;direction: rtl;',' باهام تماس بگیر: ');
            console.log('%c 09187075470 ', 'background: #222; color: #bada55');
        })

        return {
            keydown,
        }
    }
}
</script>

<style scoped>

</style>
