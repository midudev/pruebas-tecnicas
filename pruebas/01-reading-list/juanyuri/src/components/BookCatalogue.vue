<template>
  <div class="Catalogue">
    <h1>{{ catalogueCount }} libros en catálogo </h1>

    <div class="Catalogue-Tags">
      <button class="Catalogue-Tags-Button" v-for="tag in genres" :key="tag" @click="onSelectedGenre(tag)">
        {{ tag }}
      </button>
    </div>

    <div class="Catalogue-List">
      <div class="BookCard-Grid" v-for="(book, index) in filteredCatalogue" :key="index">
        <BookCard :book="book" @click="store.addToReadList(book)" />
      </div>
    </div>
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
const genres = [...new Set([...books.value.map(book => book.genre), "Todos"])];
let selectedGenre = ref('')

const onSelectedGenre = (genreValue) => {
  selectedGenre.value = genreValue
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  display: inline;
  font-size: var(--font-size-h1);
}

.Catalogue-List {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 2em;
  margin-top: 1.35em;
}

.Catalogue-Tags {
  padding-top: 15px;
  padding-bottom: 10px;
  /* background-color: blue; */
}

.Catalogue-Tags-Button {
  width: auto;
  padding: var(--button-padding);
  cursor: pointer;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  margin: 15px;
}

.Catalogue-Tags-Button:hover {
  background-color: var(--primary-color);
  border: 1px solid transparent;
  /* font-weight: bold; */
  color: white;
}

.BookCard-Grid {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>