<template>
    <div class="w-full mb-6 z-10 text-center text-sm md:text-start lg:text-base">
        <h1 class="text-3xl font-extrabold tracking-tight lg:text-4xl">{{ books.length }} libros
            disponibles</h1>
        <h2 class="text-lg lg:text-xl">{{ readingList.length }} en la lista de lectura</h2>
        <div class="flex mt-6 gap-8 flex-wrap justify-center md:justify-start md:gap-14">
            <div class="flex flex-col gap-1">
                <span>Filtrar por páginas</span>
                <input type="range" min="0" :max="maxBookPages" step="50" v-model="selectedPages" />
                <span class="text-sm opacity-60 italic">Desde {{ selectedPages }} páginas</span>
            </div>
            <div class="flex flex-col gap-1">
                <span>Filtrar por genero</span>
                <select v-model="selectedCategory"
                    class="bg-transparent select-none outline outline-1 outline-text-muted border-t-text rounded py-1 px-2">
                    <option value="">Todos</option>
                    <option v-for="genre in genres" :value="genre">{{ genre }}</option>
                </select>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useBookStore } from '../../store/books';
import { storeToRefs } from 'pinia';

const store = useBookStore()
const { books, genres, maxBookPages, readingList, selectedCategory, selectedPages } = storeToRefs(store)
</script>