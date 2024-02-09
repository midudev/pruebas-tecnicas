<script setup>
    import { computed, ref } from 'vue';
    import books from '../assets/books.json'
    import ReadingListBookItem from './ReadingListBookItem.vue'

    const storage = window.localStorage
    let savedReadingList = JSON.parse(storage.getItem('readingList')) || []

    const readingList = ref(savedReadingList)
    const pagesFilter = ref(0)
    const genreFilter = ref("")


    window.addEventListener('storage', event => {
        if (event.key==='readingList') {
            readingList.value = JSON.parse(event.newValue) || []
        }
    })
    const availableBooks = computed(() => {
        return books.library?.filter( el => !readingList.value.includes(el.book.ISBN))
    })

    const readingListBooks = computed(() => {
        return books.library.filter( el => readingList.value.includes(el.book.ISBN))
    })

    const filteredBooks = computed(() => {
        return availableBooks.value.filter( el => {
            return (genreFilter.value==="" || el.book.genre === genreFilter.value)
             && (!parseInt(pagesFilter.value) || el.book.pages<=pagesFilter.value)
        }) || []
    })

    function addBookToReadingList(id) {
        readingList.value.push(id)
        storage.setItem('readingList', JSON.stringify(readingList.value))
    }

    function deleteBookFromReadingList(index) {
        console.log("delete "+index)
        readingList.value.splice(index,1)
        storage.setItem('readingList', JSON.stringify(readingList.value))
    }

    const maxPages = Math.max(...books.library.map((el) => el.book.pages))

    const genres = [...new Set(books.library.map((el) => el.book.genre).sort())]
</script>

<template>
    <div class="px-8">

        <h2 class="text-4xl font-bold">{{ availableBooks.length }} libros disponibles</h2>
        <h2 v-if="readingListBooks.length" class="text-2xl font-semibold">{{ readingListBooks.length }} en la lista de lectura</h2>
        <section class="flex gap-8 mt-8">
            <div>
                <label for="pages-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar por páginas</label>
                <input id="pages-range" min="0" :max="maxPages" v-model="pagesFilter" type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
            </div>
            
            <div>
                <label for="genres" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar por género</label>
                <select id="genres" v-model="genreFilter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" selected>Todos</option>
                    <option v-for="genre in genres" :value="genre" :key="genre">{{ genre }}</option>
                </select>
            </div>
        </section>

        <section class="flex items-start gap-4 justify-center w-full mt-4">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4">
                <template v-for="book in filteredBooks" :key="book.book.ISBN">
                    <ReadingListBookItem :book="book.book" @click="addBookToReadingList(book.book.ISBN)"/>
                </template>
            </div>
        </section>
        
        <hr class="my-8">
        <section v-if="readingListBooks.length" class="inline-flex flex-col items-center justify-center w-full mt-4">
            <h2 v-if="readingListBooks.length" class="text-2xl font-semibold mb-4">Lista de lectura</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4 border border-slate-300 rounded-lg shadow-md p-4">
                <template v-for="(book,index) in readingListBooks" :key="book.book.ISBN">
                    <ReadingListBookItem :book="book.book" @click="deleteBookFromReadingList(index)"/>
                </template>
            </div>
        </section>
    </div>
</template>