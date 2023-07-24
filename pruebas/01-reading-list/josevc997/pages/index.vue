<script setup lang="ts">
import { Head } from ".nuxt/components";
import { library } from "../../books.json";
import { Book } from "~/types/books";

const book_list: Book[] = library;

const bookStore = useBookStore();

const generos = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];
const genero = ref(null as string | null);

const setGenero = (item: string) => {
  genero.value = item;
};

const filterName = ref("");

const filteredBookList = computed(() => {
  // retornar los items de book_list que no estan en bookStore.books

  if (genero.value && filterName.value) {
    return book_list.filter((book) => {
      return (
        !bookStore.books.find((b: Book) => b.book.ISBN === book.book.ISBN) &&
        book.book.genre === genero.value &&
        book.book.title.toLowerCase().includes(filterName.value.toLowerCase())
      );
    });
  }
  if (filterName.value) {
    return book_list.filter((book) => {
      return (
        !bookStore.books.find((b: Book) => b.book.ISBN === book.book.ISBN) &&
        book.book.title.toLowerCase().includes(filterName.value.toLowerCase())
      );
    });
  }
  if (genero.value) {
    return book_list.filter((book) => {
      return (
        !bookStore.books.find((b: Book) => b.book.ISBN === book.book.ISBN) &&
        book.book.genre === genero.value
      );
    });
  }
  return book_list.filter((book) => {
    return !bookStore.books.find((b: Book) => b.book.ISBN === book.book.ISBN);
  });
});
useHead({
  title: "Lista de lectura",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Lista de lectura",
    },
  ],
});
</script>
<template>
  <client-only placeholder="Loading...">
    <div class="max-w-7xl mx-auto gap-10 py-10 px-4 grid grid-cols-3">
      <div class="col-span-3 md:col-span-2 gap-y-6 flex-col flex p-2">
        <div class="flex items-center justify-between">
          <h1 class="text-4xl">
            {{ filteredBookList.length }} Libros Disponibles
          </h1>
          <!-- <BookFilter
            :genero="genero"
            :generos="generos"
            @update:genero="setGenero"
          /> -->
        </div>
        <div>
          <div class="flex justify-between items-end gap-x-4">
            <div class="relative text-base font-medium h-fit w-full">
              <!-- <label for=""> Nombre: </label> -->
              <input
                v-model="filterName"
                class="peer h-full w-full rounded-[7px] border border-gray-400 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Nombre
              </label>
            </div>
            <BookFilter
              :genero="genero"
              :generos="generos"
              @update:genero="setGenero"
            />
          </div>
        </div>
        <!-- <BookList
           :book_list="filteredBookList"
           class="sm:grid-cols-2 xl:grid-cols-4 grid-cols-1"
         /> -->
        <div
          class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-cols-1"
        >
          <BookItem
            @click="bookStore.addBook(book)"
            v-for="book in filteredBookList"
            :book="book"
            :is-added="false"
          />
        </div>
      </div>
      <div
        class="h-[calc(100vh-6rem)] w-full gap-y-6 flex-col flex rounded border border-slate-400 bg-slate-200 sticky top-16 overflow-auto col-span-3 md:col-span-1"
      >
        <h1 class="text-4xl sticky top-0 bg-slate-200 p-2 z-10 shadow">
          Lista de lectura({{ bookStore.books.length }})
        </h1>

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
                :is-added="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
