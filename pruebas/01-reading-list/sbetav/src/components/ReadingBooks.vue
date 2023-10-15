<template>
    <div class="bg-bg-secondary rounded-xl py-8 px-8 w-full flex flex-col gap-4 md:max-w-sm">
        <h2 class="text-3xl font-extrabold tracking-tight text-center z-10 lg:text-4xl">Lista de lectura</h2>
        <div
            class="grid grid-cols-1 gap-4 w-full overflow-scroll overflow-x-hidden pt-2 sm:grid-cols-3 md:pr-2 md:grid-cols-2 lg:grid-cols-2 ">
            <div v-for="book in readingList" :key="book.title" class="w-full flex items-center justify-center">
                <div @click="removeFromReadingList(book)"
                    class="w-52 h-72  rounded overflow-hidden hover:-translate-y-1 hover:shadow-md transition cursor-pointer brightness-90 hover:brightness-100 sm:w-36 sm:h-48">
                    <img :src="book.cover" :alt="book.title" class="w-full h-full" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useBookStore } from '../store/books';
import { storeToRefs } from 'pinia';

const store = useBookStore()
const { readingList } = storeToRefs(store)
const { removeFromReadingList } = store

</script>