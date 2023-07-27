<script lang="ts" setup>
import { computed, Ref, ref, watchEffect, onMounted } from 'vue';
import { Book, Genre, Action } from './types.d';
import { initialFilters } from './contants';
import { useBookStore } from './store/bookStore';

const filteredBooks: Ref<Book[]> = ref([])
const numOfAvailables = computed(() => filteredBooks.value.length) // Cantidad de libros disponibles del genero seleccionado
const numOfReaded = computed(() => bookStore.readedBooks.length)

const genreSelected: Ref<Genre> = ref('Todos')
const pagesSelected = ref(0)

const keywords = ref(initialFilters)

const bookStore = useBookStore() // TODO: Arreglar store

watchEffect(() => {
  const genre = genreSelected.value
  const pages = pagesSelected.value
  filteredBooks.value = bookStore.filterBooks({ genre, pages })
})

onMounted(() => {
  filteredBooks.value = bookStore.getBooks()
})
</script>

<template>
  <main class="main" :class="{ 'container': bookStore.readedBooks.length > 0 }">
    <section class="books">
      <header class="books__header">
        <h1>libros por leer: {{ numOfAvailables }}</h1>
        <h2>libros leidos: {{ numOfReaded }}</h2>
        <form class="form">
          <label class="form__range">
            Filtrar por paginas
            <input class="form__filter" type="range" min="0" max="1500" v-model="pagesSelected">
            <span>{{ pagesSelected }}</span>
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
        <li v-for="book in filteredBooks" :key="book.ISBN">
          <img class="books__img" @click="bookStore.handleAddbooks({ book, action: Action.ADD_TO_READED })" :src="book.cover"
            :alt="book.title">
        </li>
      </ul>
    </section>
    <aside :class="{ 'books__read': bookStore.readedBooks.length > 0 }">
      <h2>lista de leidos</h2>
      <ul class="booksread__container">
        <li v-for="book in bookStore.readedBooks" :key="book.ISBN">
          <img class="books__img books__img--readed"
            @click="bookStore.handleAddbooks({ book, action: Action.ADD_TO_AVAILABLE })" :src="book.cover" :alt="book.title">
        </li>
      </ul>
    </aside>
  </main>
</template>

<style scoped>
@import url(app.css);
</style>
