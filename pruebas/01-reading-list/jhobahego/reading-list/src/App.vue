<script setup lang="ts">
import { ref, onMounted, computed, Ref, watch } from 'vue';
import { getAllBooks } from './services/bookService';
import { Book, Genre, Action } from './types.d'
import { initialFilters } from './contants'

const availableBooks: Ref<Book[]> = ref([])
const readedBooks: Ref<Book[]> = ref([])
const filteredBooks: Ref<Book[]> = ref([])

const numOfAvailables = computed(() => filteredBooks.value.length) // Cantidad de libros disponibles del genero seleccionado
const numOfReaded = computed(() => readedBooks.value.length)

const genreSelected: Ref<Genre> = ref('Todos')
const pages = ref(0)

const keywords = ref(initialFilters)

function manageBooks({ book, action }: { book: Book, action: Action }) {
  if (action === Action.ADD_TO_READED) {
    readedBooks.value = readedBooks.value.concat(book)
    availableBooks.value = availableBooks.value.filter(actualBook => actualBook.ISBN !== book.ISBN)
  }

  if (action === Action.ADD_TO_AVAILABLE) {
    availableBooks.value = availableBooks.value.concat(book)
    readedBooks.value = readedBooks.value.filter(actualBook => actualBook.ISBN !== book.ISBN)
  }

  filteredBooks.value = availableBooks.value
}

function filterByGenre() {
  const genre = genreSelected.value
  if (genre === "Todos") {
    return availableBooks.value
  }

  // Retorno un array de todos los documentos con el genero seleccionado
  return availableBooks.value.filter(book => book.genre === genre)
}

function filterByPages() {
  const genreFiltered = filterByGenre()
  return genreFiltered.filter(book => book.pages >= pages.value)
}

watch([genreSelected, availableBooks], () => {
  filteredBooks.value = filterByGenre()
})

watch([pages, readedBooks, genreSelected], () => {
  filteredBooks.value = filterByPages()
})

onMounted(() => {
  availableBooks.value = getAllBooks()
  filteredBooks.value = availableBooks.value
})
</script>

<template>
  <main class="main" :class="{'container': readedBooks.length > 0}">
    <section class="books">
      <header class="books__header">
        <h1>libros por leer: {{ numOfAvailables }}</h1>
        <h2>libros leidos: {{ numOfReaded }}</h2>
        <form class="form">
          <label class="form__range">
            Filtrar por paginas
            <input class="form__filter" type="range" min="0" max="1500" v-model="pages">
            <span>{{ pages }}</span>
          </label>
          <label class="form__select">
            Filtrar por genero
            <select class="form__filter" v-model="genreSelected">
              <option v-for="keyword in keywords" :value="keyword">{{ keyword }}</option>
            </select>
          </label>
        </form>
      </header>
      <ul class="books__container">
        <li v-for="book in filteredBooks">
          <img class="books__img" @click="manageBooks({ book, action: Action.ADD_TO_READED })" :src="book.cover"
            :alt="book.title">
        </li>
      </ul>
    </section>
    <aside :class="{'books__read': readedBooks.length > 0}">
      <h2>lista de leidos</h2>
      <ul class="booksread__container">
        <li v-for="book in readedBooks">
          <img class="books__img books__img--readed" @click="manageBooks({ book, action: Action.ADD_TO_AVAILABLE })" :src="book.cover"
            :alt="book.title">
        </li>
      </ul>
    </aside>
  </main>
</template>

<style scoped>
@import url(app.css);
</style>
