<template>
  <h1>Book Catalogue</h1>

  <select name="genre-selector" id="genreSelector" @change="onSelectedGenre">
    <option :value="genre" v-for="genre in genres" :key="genre">{{ genre }}</option>
  </select>

  <button @click="filterCatalogue">Filtrar</button>
  <button @click="resetFilters">Reset Filters</button>

  <ul v-for="book in books" :key="book.title">
    <li>{{ book.title }}, {{ book.genre }}</li>
  </ul>
</template>

<script setup>

import { ref } from 'vue'
import { useBooks } from '@/composables/books.js'

/* Call to composable to get data */
const { books } = useBooks()
const booksOriginal = [...books.value]

const genres = [...new Set(books.value.map(book => book.genre))]
let selectedGenre = ref(genres[0])

const onSelectedGenre = (event) => {
  selectedGenre.value = event.target.value;
}


/**
 * Filters the catalogue based on the selected genre and the assigns it to the book reactive reference
 */
const filterCatalogue = () => {
  let tempCatalogue = booksOriginal

  if (selectedGenre.value != '')
    tempCatalogue = tempCatalogue.filter((book) => book.genre == selectedGenre.value)

  books.value = tempCatalogue
}

/**
 * Reset all filters. 
 */
const resetFilters = () => {
  books.value = booksOriginal
}

</script>

<style scoped>
</style>