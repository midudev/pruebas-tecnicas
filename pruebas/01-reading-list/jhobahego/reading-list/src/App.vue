<script lang="ts" setup>
import { computed, Ref, ref, watchEffect, onMounted } from 'vue';
import { Action, Book, Genre } from './types.d';
import { useBookStore } from './store/bookStore';
import ListOfBooks from './components/ListOfBooks.vue';
import Header from './components/header/Header.vue';

const filteredBooks: Ref<Book[]> = ref([])
const numOfAvailables = computed(() => filteredBooks.value.length) // Cantidad de libros disponibles del genero seleccionado
const numOfReaded = computed(() => bookStore.readedBooks.length)

const genreSelected: Ref<Genre> = ref('Todos')
const pagesSelected = ref(0)

const bookStore = useBookStore()

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
      <Header :numOfAvailables="numOfAvailables" :numOfReaded="numOfReaded" @onChangePages="pagesSelected = $event"
        @onChangeGenre="genreSelected = $event" />
      <ListOfBooks class="books__container" :books="filteredBooks" :action="Action.ADD_TO_READED" />
    </section>
    <aside :class="{ 'books__read': bookStore.readedBooks.length > 0 }">
      <h2>lista de leidos</h2>
      <ListOfBooks class="booksread__container" :books="bookStore.readedBooks" :action="Action.ADD_TO_AVAILABLE" />
    </aside>
  </main>
</template>

<style scoped>
@import url(app.css);
</style>
