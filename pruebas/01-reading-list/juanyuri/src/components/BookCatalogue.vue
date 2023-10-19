<template>
  <div class="Catalogue">
    <h1>{{ catalogueCount }} libros en catálogo </h1>

    <div class="Catalogue-Tags">
      <button class="Catalogue-Tags-Button" @click="onSelectedGenre('Todos')"
        :class="{ 'selected': 'Todos' === selectedGenre }">Todos</button>
      <button class="Catalogue-Tags-Button" v-for="tag in genres" :key="tag"
        :class="{ 'selected': tag === selectedGenre }" @click="onSelectedGenre(tag)">
        {{ tag }} ({{ numBooksFiltered(tag) }})
      </button>
    </div>

    <div class="Catalogue-Search">
      <input type="text" placeholder="Buscar..." v-model="searchText">
    </div>

    <div class="Catalogue-List">
      <div class="BookCard" v-for="(book, index) in filteredCatalogue" :key="index">
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
  let tempStore = store.catalogue

  if (selectedGenre.value !== "Todos")
    tempStore = tempStore.filter(book => book.genre === selectedGenre.value)

  if(searchText.value !== '')
    tempStore = tempStore.filter(book => book.title.toLowerCase().includes(searchText.value.toLowerCase()) )

  return tempStore
})


const numBooksFiltered = (genre) => {
  return store.catalogue.filter(e => e.genre === genre).length
}

let searchText = ref('')


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
  background-color: var(--primary-color);
  color: white;
  border: 1px solid transparent;
}

.BookCard {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Catalogue-Search {
  position: relative;
  margin-top: 10px;
}

.Catalogue-Search input {
  width: 500px;
  padding: 15px;
  border: none;
  border-radius: 9px;
  background-color: var(--input-background-color);
  color: black;
  font-size: var(--input-font-size);
  box-shadow: var(--input-box-shadow);
  border: 2px solid rgb(187, 187, 187);
  outline-offset: 12px;
}

.Catalogue-Search input:focus {
  outline: none;
  box-shadow: var(--input-box-shadow-focus);
}

.Catalogue-Search input::placeholder {
  color:black;
  opacity: 0.5;
}
</style>