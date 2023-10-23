<script lang="ts" setup>
import { Action, Book } from '../../types.d';
import { useBookStore } from '../../store/bookStore';

const bookStore = useBookStore()

const props = defineProps<{
  books: Book[]
  action: Action
}>()

const listClass = props.action === Action.ADD_TO_AVAILABLE 
  ? 'booksread__container' 
  : 'books__container'
</script>

<template>
  <ul :class="listClass">
    <li v-for="book in props.books" :key="book.ISBN">
      <img class="books__img" :class="{ 'books__img--readed': action === Action.ADD_TO_AVAILABLE }"
        @click="bookStore.handleAddbooks({ book, action })" :src="book.cover" :alt="book.title">
    </li>
  </ul>
</template>

<style scoped>
@import url(listOfBooks.css);
</style>