<template>
  <div class="home text-center">
    <h1
      class="my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Catálogo de libros
    </h1>
    <p
      v-show="books.length"
      class="mb-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
    >
      {{ books.length - $booksStore.totalBooksList }} libros disponibles
    </p>
    <p
      v-show="$booksStore.totalBooksList"
      class="mb-6 text-sm font-normal text-gray-500 lg:text-lg dark:text-gray-400"
    >
      {{ $booksStore.totalBooksList }} libros en la lista de lectura
    </p>
    <BooksList :books="books" :type="'bookAvilable'" />
    <div v-show="$booksStore.booksList.length">
      <h2
        class="mt-12 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white"
      >
        Lista de lectura
      </h2>
      <BooksList :books="$booksStore.booksList" :type="'bookList'" />
    </div>
  </div>
</template>

<script setup>
import BooksList from "@/components/BooksList.vue";
import { useBooksStore } from "@/stores/BooksStore";
import { getAllBooks } from "@/services/booksRepository";
import { ref } from "vue";

const $booksStore = useBooksStore();
const books = ref([]);
getAllBooks().then((data) => (books.value = data));
</script>
