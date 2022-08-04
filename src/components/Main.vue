<template>
    <div tabindex="0" class="bg-mine-shaft-900 font-sans h-screen w-full flex flex-row justify-center items-center px-4">
        <div class="flex flex-col w-full lg:w-1/2">
            <div class="flex justify-center items-center  border-b border-alto-700 justify-center">
                <img class="w-72 h-72 rounded-full object-fill" src="/src/assets/imgs/Logo.svg"
                     alt="لوگوی سایت میثم معصومی">
            </div>
            <div class="flex flex-row justify-between items-center ">
                <div class="flex flex-row items-center">
                    <img class="w-8 h-8 object-fill" src="/src/assets/imgs/pattern.svg" alt="پترن سایت میثم معصومی">
                    <div class="my-4 bg-mountain-meadow-600 text-alto-200 px-4 py-1 mr-3">
                        م. معصومی
                    </div>
                    <!-- --------= Up =-------- -->
                    <Transition>
                        <div v-show="keydown.action === 'ArrowUp'"
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
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
                             class="flex justify-center items-center my-4 bg-mountain-meadow-600 text-alto-200 mr-3 w-8 h-8">
                            {{ keydown.action }}
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 right-0 px-3 py-2">
            <div class="flex flex-col items-start text-alto-200 ltr" style="font-family: monospace, monospace;" v-html="keydown.shown">
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, reactive, watch} from "vue";

export default {
    name: "Main",
    setup() {
        const keydown = reactive({
            key: null,
            action: null,
            buffer: '',
            shown: '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /hire-me</span></div>',
        })

        function ShowDetail(e) {
            if (keydown.shown.length > 2048){
                keydown.action = '';
                keydown.buffer = '';
                keydown.key = '';
                keydown.shown = '$>' + keydown.buffer;
            }
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

            keydown.key = checkKey(e.key);
            keydown.buffer += keydown.key;
            keydown.shown = '$> ' + keydown.buffer;

            if (e.key === 'Alt') {
                keydown.action = 'Alt';
            }
            if (e.key === 'Delete') {
                keydown.action = '';
                keydown.buffer = '';
                keydown.key = '';
                keydown.shown = '<div class="flex flex-row">$> <span class="text-alto-800 inline ml-2">use /hire-me</span></div>';
            }
            if (e.key === "Backspace") {
                keydown.buffer = keydown.buffer.slice(0, -1);
                keydown.shown = '$> ' + keydown.buffer;
            }
            if (e.key === "Enter") {
                if (keydown.buffer === '/hire-me') {
                    appendHelpCommand();
                    keydown.buffer = '';
                }
                keydown.buffer += '<br>';

            }
        }

        function appendHelpCommand(){
            keydown.shown += '<br>';
            keydown.shown += '<div class="rtl bg-mine-shaft-800 px-4 py-2">';
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

        watch(() => keydown.action, (currentValue, oldValue) => {
            setTimeout(() => {
                keydown.action = '';
            }, 500);
        });


        onMounted(() => {
            document.addEventListener("keyup", function (e) {
                ShowDetail(e);
            });
            document.addEventListener('contextmenu', event => event.preventDefault());

            // console.log(chalk.bgGray.green.bold(' من میثم معصومی هستم، '));
            // console.log(chalk.bgGray.green.bold(' کمی برنامه نویسی بلدم، '));
            // console.log(chalk.bgGray.green.bold(' دنبال توسعه دهنده لاراول و ویو هستی؟ '));
            // console.log(chalk.bgGray.green.bold(' باهام تماس بگیر: '));
            // console.log(chalk.bgGray.white.bold(' 09187075470 '));
            console.log(' من میثم معصومی هستم، ');
            console.log(' کمی برنامه نویسی بلدم، ');
            console.log(' دنبال توسعه دهنده لاراول و ویو هستی؟ ');
            console.log(' باهام تماس بگیر: ');
            console.log(' 09187075470 ');
        })

        return {
            keydown,
            ShowDetail
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
