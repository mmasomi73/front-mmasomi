<template>
    <div tabindex="0" class="bg-mine-shaft-900 dark:bg-alto-200 font-sans h-screen w-full flex flex-row justify-center items-center px-4">
        <div class="flex flex-col w-full lg:w-1/2">
            <div class="flex justify-center items-center  border-b border-alto-700 justify-center">
                <img class="w-72 h-72 rounded-full object-fill" :src="logo_url"
                     alt="لوگوی سایت میثم معصومی">
            </div>
            <div class="flex flex-row justify-between items-center ">
                <div class="flex flex-row items-center">
                    <img class="w-8 h-8 object-fill" src="/src/assets/imgs/pattern.svg" alt="پترن سایت میثم معصومی">
                    <div class="my-4 bg-mountain-meadow-600 text-alto-200 dark:bg-mine-shaft-900 px-4 py-1 mr-3">
                        م. معصومی
                    </div>
                    <!-- --------= Up =-------- -->
                    <Transition>
                        <div v-show="keydown.action === 'ArrowUp'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= Down =-------- -->
                    <Transition>
                        <div v-show="keydown.action === 'ArrowDown'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= Left =-------- -->
                    <Transition>
                        <div v-show="keydown.action === 'ArrowLeft'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= Right =-------- -->
                    <Transition>
                        <div v-show="keydown.action === 'ArrowRight'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= Plus =-------- -->
                    <Transition>
                        <div v-show="keydown.action === '+'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= Minus =-------- -->
                    <Transition>
                        <div v-show="keydown.action === '-'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                      clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </Transition>
                    <!-- --------= /,Del,Alt =-------- -->
                    <Transition>
                        <div v-show="keydown.action === '/' || keydown.action === 'Del' || keydown.action === 'Alt'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 dark:text-mine-shaft-900 mr-3 w-8 h-8">
                            {{ keydown.action }}
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 right-0 px-3 py-2">
            <div class="flex flex-col items-start text-alto-200 dark:text-mine-shaft-900 ltr" style="font-family: monospace, monospace;" v-html="keydown.shown">
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, reactive, ref, watch} from "vue";
import moment from "jalali-moment";

export default {
    name: "Main",
    setup() {
        const logo_url = ref('/src/assets/imgs/Logo.svg');
        const keydown = reactive({
            is_empty: true,
            to_run: false,
            key: null,
            action: null,
            commands: ['/hire-me', '/menu','/clear', '/about', '/contact', '/dark'],
            buffer: '',
            history: ['/hire-me','/menu','/clear','/about','/contact'],
            history_index: 0,
            shown: '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /menu</span></div>',
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
                if (keydown.buffer === '/dark') {
                    darkModeHandler();
                }
                if (keydown.buffer === '/date') {
                    displayCalendar();
                }
                if (keydown.buffer === '/time') {
                    displayTime();
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

        function displayCalendar(){
            const startDay = moment().clone().startOf('jmonth').startOf('jweek');
            const endDay = moment().clone().endOf('jmonth').endOf('jweek');
            let calendar = []
            var index = startDay.clone();
            while (index.isBefore(endDay, 'day')) {
                let week = [];
                for (let i = 0; i < 7; i++) {
                    week.push({
                        date: index.format('jD'),
                        isToday: moment(index.format('jYYYY-jMM-jDD')).isSame(moment().format('jYYYY-jMM-jDD'), 'day'),
                        day: index.format('dd')
                    });
                    index.add(1, 'day');

                }
                calendar.push(week);
            }

            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-mine-shaft-900 dark:bg-alto-200 p-3 font-vazir rtl text-xs">';

            keydown.shown += '<div class="flex flex-row border-b dark:border-alto-800">';
            let day_of_week = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
            for (let j = 0; j < 7; j++){
                keydown.shown += '<div class="h-6 w-6 m-1 flex flex-1 justify-center items-center">';
                keydown.shown += day_of_week[j];
                keydown.shown += '</div>';
            }
            keydown.shown += '</div>';

            for (let i = 0; i < calendar.length; i++) {
                keydown.shown += '<div class="flex flex-row ">';
                for (let j = 0; j < calendar[i].length; j++) {
                    if (calendar[i][j].isToday) {
                        keydown.shown += '<div class="h-6 w-6 m-1 flex flex-1 justify-center items-center bg-mountain-meadow-600 text-alto-200">';
                    } else {
                        keydown.shown += '<div class="h-6 w-6 m-1 flex flex-1 justify-center items-center">';
                    }

                    keydown.shown +=  convertToPersianNumber(calendar[i][j].date);
                    keydown.shown += '</div>';
                }
                keydown.shown += '</div>';
            }
            keydown.shown += '</div>';
        }

        function addToHistory(command){
            keydown.history.push(command);
            keydown.history_index = keydown.history.length;
        }

        function appendHelpCommand(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="rtl bg-mine-shaft-900 dark:bg-alto-200 px-4 py-2 font-vazir">';
            keydown.shown += '<br>';
            keydown.shown += 'من ';
            keydown.shown += '<span class="text-alto-200 dark:text-mine-shaft-900 font-semibold text-mountain-meadow-600">میثم معصومی</span>';
            keydown.shown += ' هستم، <br>';
            keydown.shown += 'من کمی لاراول و ویو بلدم، اگر اینو دیدی یعنی و دنبال برنامه نویس بودی خوشحال میشم باهام تماس بگیرید.';
            keydown.shown += '🤙';
            keydown.shown += '<br>';
            keydown.shown += '<span class="text-alto-200 dark:text-mine-shaft-900 font-semibold text-mountain-meadow-600">Mmasomi@gmail.com</span>';
            keydown.shown += '</div>';
        }

        function showMenu(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-mine-shaft-900 dark:bg-alto-200 p-3">';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">/hire-me</div><div class="ml-3"> Show My Skills if You want Hire Me 🤙. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">/clear</div><div class="ml-3"> Clear Screen. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">/menu</div><div class="ml-3"> Show Menu. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">/about</div><div class="ml-3"> My Life Story ☕. </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row ">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">/contact</div><div class="ml-3"> My Contact Detail 📞. </div>';
            keydown.shown += '</div>';
            keydown.shown += '</div>';
            keydown.shown += '<br>';
        }

        function showHelpMenu(){
            return '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /menu</span></div>';
        }

        function darkModeHandler(){
            let html = document.querySelector("html");
            if (html.classList.contains("dark")){
                html.classList.remove("dark");
            }else{
                html.classList.add("dark");
            }
            getLogo();
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
            keydown.shown += '<div class="rtl bg-mine-shaft-900 dark:bg-alto-200 px-4 py-2 font-vazir">';
            keydown.shown += '<br>';
            keydown.shown += 'من ';
            keydown.shown += '<span class="text-alto-200 dark:text-mine-shaft-900 font-semibold text-mountain-meadow-600">میثم معصومی</span>';
            keydown.shown += ' هستم، <br>';
            keydown.shown += 'یک جایی بین دهه بیست و سی زندگیمم.';
            keydown.shown += '<br>';
            keydown.shown += 'ارشد نرم‌افزارم رو از دانشگاه بوعلی گرفتم، کارشناسی شهید رجایی تهران بودم؛ ';
            keydown.shown += '<br>';
            keydown.shown += 'معلم هستم و در حال حاضر توسعه دهنده وبم،';
            keydown.shown += '<br>';
            keydown.shown += 'کمی تجربه دارم و چیزهایی که نمیدونم از چیزهایی که میدونم خیلی بیشتره.';
            keydown.shown += '<br>';
            keydown.shown += '</div>';
        }

        function showContact(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-mine-shaft-900 dark:bg-alto-200 p-3">';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">INSTAGRAM</div><div class="ml-3 text-mountain-meadow-600"> @_mmasomi </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">TELEGRAM</div><div class="ml-3 text-mountain-meadow-600"> @mmasomi </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">TWITTER</div><div class="ml-3 text-mountain-meadow-600"> @mmasomi73 </div>';
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-between">';
            keydown.shown += '<div class="text-alto-200 dark:text-mine-shaft-900 font-semibold">GMAIL</div><div class="ml-3 text-mountain-meadow-600"> mmasomi73@gmail.com </div>';
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

        function convertToPersianNumber(number){
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return String(number).replace(/[0-9]/g, function (w) {
                return farsiDigits[+w];
            });
        }

        function getLogo(){
            let html = document.querySelector("html");
            if (html.classList.contains("dark")){
                logo_url.value = '/src/assets/imgs/light-logo.svg';
            }else{
                logo_url.value = '/src/assets/imgs/Logo.svg';
            }
        }

        function displayTime(){
            let date = convertToPersianNumber(moment().format(' jD jMMMM ماه jYYYY'));
            let time = convertToPersianNumber(moment().format('HH:mm'));

            keydown.shown += '<br>';
            keydown.shown += '<div class="flex flex-col bg-alto-200 dark:bg-mine-shaft-900 text-mine-shaft-900 dark:text-alto-200 border dark:border-mine-shaft-900 font-vazir rtl text-xs">';
            keydown.shown += '<div class="flex flex-row p-3">';
            keydown.shown += 'امروز ' + date;
            keydown.shown += '</div>';
            keydown.shown += '<div class="flex flex-row justify-center items-center bg-mine-shaft-900 dark:bg-alto-200 dark:text-mine-shaft-900 text-alto-200 p-3">';
            keydown.shown +=  time;
            keydown.shown += '</div>';
            keydown.shown += '</div>';

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


            moment.locale("fa");
            moment.updateLocale('fa', {
                months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
            });
        })

        return {
            keydown,
            logo_url
        }

    }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
