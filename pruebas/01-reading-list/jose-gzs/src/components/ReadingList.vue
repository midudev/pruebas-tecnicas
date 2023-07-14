<script setup>
    import books from '../assets/books.json'
    import ReadingListBookItem from './ReadingListBookItem.vue'

    console.log(books)
</script>

<template>
    <div class="inline-flex items-center justify-center px-8 w-full">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4">
            <template v-for="book in books.library" :key="book.book.ISBN">
                <ReadingListBookItem :book="book.book" />
            </template>
        </div>
    </div>
</template>