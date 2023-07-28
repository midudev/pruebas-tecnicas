<script lang="ts" setup>
import { onMounted } from 'vue';
import { Action } from './types.d';
import { useBookStore } from './store/bookStore';
import ListOfBooks from './components/ListOfBooks.vue';
import Header from './components/header/Header.vue';

const bookStore = useBookStore()

onMounted(() => {
  bookStore.getBooks()
})
</script>

<template>
  <main class="main" :class="{ 'container': bookStore.readedBooks.length > 0 }">
    <section class="books">
      <Header />
      <ListOfBooks :books="bookStore.filteredBooks" :action="Action.ADD_TO_READED" />
    </section>
    <aside :class="{ 'books__read': bookStore.readedBooks.length > 0 }">
      <h2>lista de leidos</h2>
      <ListOfBooks :books="bookStore.readedBooks" :action="Action.ADD_TO_AVAILABLE" />
    </aside>
    <notifications />
  </main>
</template>

<style scoped>
@import url(app.css);
</style>
