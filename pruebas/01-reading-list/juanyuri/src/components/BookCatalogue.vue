<template>
  <div class="Catalogue">
    <h1>{{ catalogueCount }} libros en catálogo </h1>

    <div class="Catalogue-Tags">
      <button class="Catalogue-Tags-Button" @click="onSelectedGenre('Todos')" :class="{ 'selected': 'Todos' === selectedGenre }">Todos</button>
      <button class="Catalogue-Tags-Button" v-for="tag in genres" :key="tag" :class="{ 'selected': tag === selectedGenre }" @click="onSelectedGenre(tag)">
        {{ tag }} ({{ numBooksFiltered(tag) }})
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
const genres = [...new Set(books.value.map(book => book.genre))];
let selectedGenre = ref('Todos')

const onSelectedGenre = (genreValue) => {
  selectedGenre.value = genreValue
}

const filteredCatalogue = computed(() => {
  if (selectedGenre.value !== "Todos")
    return store.catalogue.filter(book => book.genre === selectedGenre.value)

  return store.catalogue
})

const resetFilters = () => {
  selectedGenre.value = ''
}

const numBooksFiltered = (genre) => {
  return store.catalogue.filter(e => e.genre === genre).length
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
  margin: 0 auto;
}

h1 {
  display: inline;
  font-size: var(--font-size-h1);
}

.Catalogue-List {
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin-top: 1.35em;
}

.Catalogue-Tags {
  padding-top: 15px;
  padding-bottom: 10px;
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
  color: white;
}

.Catalogue-Tags-Button.selected {
  background-color: var(--primary-color); /* Added selected background color */
  color: white; /* Added selected font color */
  border:1px solid transparent;
}

.BookCard-Grid {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>