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
    <BooksList :books="booksFiltered" :type="'bookAvailable'" />
    <div v-show="$booksStore.totalBooksList">
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
import { ref, computed, watch } from "vue";

const $booksStore = useBooksStore();
const books = ref([]);
const booksFiltered = ref([]);
const totalBooksList = computed(() => $booksStore.totalBooksList);

getAllBooks().then((data) => {
  books.value = data;
  getAvailableBooks();
});

watch(totalBooksList, () => getAvailableBooks());

function getAvailableBooks() {
  booksFiltered.value = books.value.filter((book) => {
    if (
      !$booksStore.booksList.some(
        (bookList) => bookList.book.title == book.book.title
      )
    )
      return book;
  });
}
</script>
