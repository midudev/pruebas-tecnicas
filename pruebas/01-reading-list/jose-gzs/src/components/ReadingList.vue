<script setup>
    import { computed, ref } from 'vue';
    import books from '../assets/books.json'
    import ReadingListBookItem from './ReadingListBookItem.vue'

    const storage = window.localStorage
    const savedReadingList = storage.getItem('readingList') || []

    const readingList = ref([savedReadingList])

    const availableBooks = computed(() => {
        return books.library.filter( el => !readingList.value.includes(el.book.ISBN))
    })

    const readingListBooks = computed(() => {
        return books.library.filter( el => readingList.value.includes(el.book.ISBN))
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


</script>

<template>
    <h2 class="text-4xl font-bold px-8">{{ availableBooks.length }} libros disponibles</h2>
    <h2 v-if="readingListBooks.length" class="text-3xl font-semibold px-8">{{ readingListBooks.length }} en la lista de lectura</h2>
    <div class="inline-flex items-center justify-center px-8 w-full mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4">
            <template v-for="book in availableBooks" :key="book.book.ISBN">
                <ReadingListBookItem :book="book.book" @click="addBookToReadingList(book.book.ISBN)"/>
            </template>
        </div>
    </div>

    <hr class="my-8">
    <div class="inline-flex items-center justify-center px-8 w-full mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4">
            <template v-for="(book,index) in readingListBooks" :key="book.book.ISBN">
                <ReadingListBookItem :book="book.book" @click="deleteBookFromReadingList(index)"/>
            </template>
        </div>
    </div>
</template>