<script setup lang="ts">
import { Book } from "../../types/books";
import { PropType } from "vue";

const bookStore = useBookStore();

const props = defineProps({
  book_list: {
    type: Array as PropType<Book[]>,
    required: true,
  },
});
</script>
<template>
  <div class="grid gap-2">
    <BookItem
      @click="bookStore.addBook(book)"
      v-for="book in book_list"
      :book="book"
    />
  </div>
</template>
