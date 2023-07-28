<script lang="ts" setup>
import { onMounted } from 'vue';
import { Action } from './types.d';
import { useBookStore } from './store/bookStore';
import ListOfBooks from './components/books/ListOfBooks.vue';
import BookHeader from './components/books/header/BooksHeader.vue';
import Navbar from './components/navbar/Navbar.vue';

const bookStore = useBookStore()

onMounted(() => {
  if (bookStore.availableBooks.length === 0) {
    bookStore.getBooks()
  }
})
</script>

<template>
  <header class="header">
    <Navbar />
  </header>
  <main :class="{ 'container': bookStore.readedBooks.length > 0 }">
    <section :class="{ 'section': bookStore.readedBooks.length == 0, 'books': bookStore.readedBooks.length > 0 }">
      <BookHeader />
      <ListOfBooks :books="bookStore.filteredBooks" :action="Action.ADD_TO_READED" />
    </section>
    <aside :class="{ 'books__read': bookStore.readedBooks.length > 0 }">
      <h2>lista de leidos</h2>
      <ListOfBooks :books="bookStore.readedBooks" :action="Action.ADD_TO_AVAILABLE" />
    </aside>
    <notifications style="margin-top: 4.6em;" />
  </main>
</template>

<style scoped>
@import url(app.css);
</style>
