<template>
  <h1>Book Catalogue</h1>

  <ul v-for="book in books" :key="book.title">
    <li>{{ book.title }}</li>
  </ul>

</template>

<script setup>
/* import {ref} from 'vue' */
import { useBooks } from '@/composables/books';

const { books } = useBooks();
</script>

<style scoped>

</style>