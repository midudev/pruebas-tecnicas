<template>
    <div
        class="grid grid-cols-1 gap-4 overflow-scroll overflow-x-hidden md:pr-2 pt-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="book in filteredBooks" :key="book.title" class=" flex items-center justify-center md:justify-start">
            <div @click="addToReadingList(book.book)"
                class="w-64 h-96 rounded flex items-center justify-center overflow-hidden hover:-translate-y-1 hover:shadow-md transition cursor-pointer brightness-90 hover:brightness-100 sm:w-56 sm:h-72 md:w-44 md:h-60">
                <img :src="book.book.cover" :alt="book.book.title" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBookStore } from '../../store/books';
import { storeToRefs } from 'pinia';

const store = useBookStore()
const { filteredBooks } = storeToRefs(store)
const { addToReadingList } = store
</script>