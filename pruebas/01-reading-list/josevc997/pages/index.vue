<script setup lang="ts">
import { library } from "../../books.json";
import { Book } from "~/types/books";

const book_list: Book[] = library;

const bookStore = useBookStore();
console.log(bookStore.books);

const filteredBookList = computed(() => {
  // retornar los items de book_list que no estan en bookStore.books
  return book_list.filter((book) => {
    return !bookStore.books.find((b) => b.book.ISBN === book.book.ISBN);
  });
});
</script>
<template>
  <div class="max-w-7xl mx-auto gap-10 py-10 px-4 grid grid-cols-3">
    <div class="col-span-2 gap-y-6 flex-col flex p-2">
      <h1 class="text-4xl">Libros Disponibles</h1>
      <!-- <BookList
        :book_list="filteredBookList"
        class="sm:grid-cols-2 xl:grid-cols-4 grid-cols-1"
      /> -->
      <div class="grid gap-2 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1">
        <BookItem
          @click="bookStore.addBook(book)"
          v-for="book in filteredBookList"
          :book="book"
        />
      </div>
    </div>
    <div
      class="h-[calc(100vh-6rem)] w-full gap-y-6 flex-col flex rounded border border-slate-400 bg-slate-200 sticky top-16 overflow-auto"
    >
      <h1 class="text-4xl sticky top-0 bg-slate-200 p-2">Lista de lectura</h1>
      <div class="p-2">
        <div class="grid grid-cols-1">
          <!-- <BookList
            :book_list="bookStore.books"
            class="sm:grid-cols-2 xl:grid-cols-2 grid-cols-1 col-span-1"
          /> -->
          <div
            class="grid gap-2 sm:grid-cols-2 xl:grid-cols-2 grid-cols-1 col-span-1"
          >
            <BookItem
              @click="bookStore.removeBook(book)"
              v-for="book in bookStore.books"
              :book="book"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
