<template>
  <div>
    <div
      v-if="books"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
    >
      <BookCard v-for="book in books" :book="book" :key="book.ISBN" />
    </div>
    <div v-else class="text-center">
      <div class="w-6 m-auto">
        <SpinnerItem />
      </div>
      <p class="italic mt-4">Loading books...</p>
    </div>
  </div>
</template>

<script setup>
import { getAllBooks } from "@/services/booksRepository";
import BookCard from "@/components/BookCard.vue";
import SpinnerItem from "@/components/SpinnerItem.vue";
import { ref } from "vue";

const books = ref(null);
getAllBooks().then((data) => (books.value = data));
</script>
