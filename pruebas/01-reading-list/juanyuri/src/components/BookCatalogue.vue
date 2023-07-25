<template>
  <div class="Catalogue">
    <h1>Catálogo: {{ catalogueCount }} </h1>

    <select name="genre-selector" id="genreSelector" class="Genre-Selector" @change="onSelectedGenre">
      <option :value="genre" v-for="genre in genres" :key="genre" selected="Todos">{{ genre }}</option>
    </select>

    <div class="Catalogue-List">
      <BookCard v-for="book in filteredCatalogue" :key="book.title" :book="book" @click="store.addToReadList(book)" />
    </div>
  </div>

  <!-- <p>Genre count: {{ catalogueGenreCount }}</p> -->
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
const genres = [...new Set([...books.value.map(book => book.genre), "Todos"])];
let selectedGenre = ref('')

const onSelectedGenre = (event) => {
  selectedGenre.value = event.target.value
}

const filteredCatalogue = computed(() => {
  if (selectedGenre.value !== '' && selectedGenre.value !== "Todos")
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
.Catalogue {
  display: block;
  padding-left: 3em;
  padding-top: 2em;
}

h1 {
  display: inline;
  font-size: 25px;
  margin-left: 10px;
}

.Catalogue-List {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 0.75em;
}

.Genre-Selector {
  border-radius: 6px;
  height: 2em;
  width: 11em;
}
</style>