<script lang="ts" setup>
import { Ref, ref, watchEffect, computed } from 'vue'
import { Genre } from '../../../types.d';
import { initialFilters } from '../../../contants'
import { useBookStore } from '../../../store/bookStore';

const bookStore = useBookStore()

const numOfAvailables = computed(() => bookStore.filteredBooks.length) // Cantidad de libros disponibles del genero seleccionado
const numOfReaded = computed(() => bookStore.readedBooks.length)

const genreSelected: Ref<Genre> = ref('Todos')
const pagesSelected = ref(0)

const keywords = ref(initialFilters)


watchEffect(() => {
  const genre = genreSelected.value
  const pages = pagesSelected.value
  bookStore.filterBooks({ genre, pages })
})
</script>

<template>
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
</template>

<style scoped>
@import url(booksHeader.css);
</style>