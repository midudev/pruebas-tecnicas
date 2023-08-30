<script>
    export let darkMode

    import {KEY_VIEW_MODE} from "$lib/constants.js"
    
    function handleClickMode(){
        const darkModeStorage = localStorage.getItem(KEY_VIEW_MODE)
        
        darkMode = (darkModeStorage?.toLowerCase?.() === 'false')
        
        localStorage.setItem(KEY_VIEW_MODE, darkMode)
        document.documentElement.classList.toggle('dark')
    }

</script>

<header class="flex justify-between items-center bg-white drop-shadow-sm py-1 dark:bg-slate-800 dark:text-white">
    <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Lista de lectura
        </span> 
        - Prueba 01
    </h1>

    <nav class="flex">
        <button on:click={ handleClickMode } class="w-[30px] h-[30px] mx-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[30px] h-[30px]"   fill="none" viewBox="0 0 96 96">
                <path stroke={ `#${darkMode ? 'fff' : '000'}` } stroke-width="5" d="M65 47.5C65 57.165 57.165 65 47.5 65C37.835 65 30 57.165 30 47.5C30 37.835 37.835 30 47.5 30C57.165 30 65 37.835 65 47.5Z" />
                <path stroke={ `#${darkMode ? 'fff' : '000'}` } stroke-linecap="round" stroke-width="5" d="M48 86L48 75.773M48 10L48 19.2945M10 48L20.227 48M86 48L76.7055 48M74.8701 74.8691L67.6385 67.6376M21.13 21.129L27.7022 27.7012M21.1299 74.8691L28.3615 67.6376M74.87 21.129L68.2978 27.7012" />
            </svg>
        </button>
        <!-- <select class="flex flex-row gap-2 block w-full p-2 text-sm text-gray-900 bg-gray-50 focus:ring-blue-500   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="ES">ES</option>
            <option value="EN">EN</option>
        </select> -->
    </nav>
</header>
