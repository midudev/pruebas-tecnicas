<script setup>
    import { computed, ref } from 'vue';
    import books from '../assets/books.json'
    import ReadingListBookItem from './ReadingListBookItem.vue'

    const storage = window.localStorage
    const savedReadingList = JSON.parse(storage.getItem('readingList')) || []

    const readingList = ref(savedReadingList)
    const pagesFilter = ref(0)

    const availableBooks = computed(() => {
        
        return filteredBooks.value?.filter( el => !readingList.value.includes(el.book.ISBN))
        // return books.library.filter( el => !readingList.value.includes(el.book.ISBN))
    })

    const readingListBooks = computed(() => {
        return books.library.filter( el => readingList.value.includes(el.book.ISBN))
    })

    const filteredBooks = computed(() => {
        return books.library.filter( el => {
            return !pagesFilter.value || (pagesFilter.value > 0 && el.book.pages<=pagesFilter.value)
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

    const maxPages = computed(() => {
        return Math.max(...books.library.map((el) => el.book.pages))
    })
</script>

<template>
    <h2 class="text-4xl font-bold px-8">{{ availableBooks.length }} libros disponibles</h2>
    <h2 v-if="readingListBooks.length" class="text-3xl font-semibold px-8">{{ readingListBooks.length }} en la lista de lectura</h2>

    <input type="range" name="" id="" min="1" :max="maxPages" v-model="pagesFilter">
    {{ pagesFilter }}
    <div class="inline-flex items-center justify-center px-8 w-full mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4">
            <template v-for="book in availableBooks" :key="book.book.ISBN">
                <ReadingListBookItem :book="book.book" @click="addBookToReadingList(book.book.ISBN)"/>
            </template>
        </div>
    </div>

    <hr class="my-8">
    <div v-if="readingListBooks.length" class="inline-flex items-center justify-center px-8 w-full mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4 border border-slate-300 rounded-lg shadow-md p-4">
            <template v-for="(book,index) in readingListBooks" :key="book.book.ISBN">
                <ReadingListBookItem :book="book.book" @click="deleteBookFromReadingList(index)"/>
            </template>
        </div>
    </div>
</template>