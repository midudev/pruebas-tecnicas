<template>
  <h1>Book Catalogue ({{ catalogueCount }})</h1>
  <p>Genre count: {{ catalogueGenreCount }}</p>
  <select name="genre-selector" id="genreSelector" @change="onSelectedGenre">
    <option :value="genre" v-for="genre in genres" :key="genre">{{ genre }}</option>
  </select>

  <button @click="resetFilters">Reset Filters</button>

  <div class="catalogue">
    <BookCard v-for="book in filteredCatalogue" :key="book.title" :book="book" @click="store.addToReadList(book)" />
  </div>
</template>



<script setup>
import { ref, computed } from 'vue'
import { useStore } from '@/stores/BookStore.js'
import { useBooks } from '@/composables/books.js'
import BookCard from '@/components/BookCard.vue'

/* Use the store */
const store = useStore()

/* Call to composable to get data */
const { books } = useBooks()

/* Data to be used in selector/filters */
const genres = [...new Set(books.value.map(book => book.genre))]
let selectedGenre = ref('')

const onSelectedGenre = (event) => {
  selectedGenre.value = event.target.value
}

const filteredCatalogue = computed(() => {
  if (selectedGenre.value !== '')
    return store.catalogue.filter(book => book.genre === selectedGenre.value)

  return store.catalogue
})



const resetFilters = () => {
  selectedGenre.value = ''
}

/* Counters of differents Lists */
const catalogueGenreCount = computed(() => store.catalogue.filter(e => e.genre === selectedGenre.value).length)
const catalogueCount = computed(() => store.catalogue.length)

</script>



<style scoped>
.catalogue {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: blueviolet;
}
</style>