<template>
  <div class="mb-4">
    <img
      :src="book.book.cover"
      :alt="book.book.title"
      class="w-full object-cover rounded-lg shadow-md max-h-96 h-full"
    />
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-4 rounded-md shadow-lg">
        <h4 class="mt-1 mb-2 text-xl font-semibold leading-tight truncate">
          {{ book.book.title }}
        </h4>
        <button
          v-show="type === 'bookAvailable'"
          class="flex m-auto"
          @click="$booksStore.addBookList(book)"
        >
          Añadir libro
          <CheckSvg class="ml-1" :color="'#008000'" />
        </button>
        <button
          v-show="type === 'bookList'"
          class="flex m-auto"
          @click="$booksStore.removeBookList(this.$.vnode.key)"
        >
          Quitar libro
          <CloseSvg class="ml-1" :color="'#ff0000'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from "@/stores/BooksStore";
import CheckSvg from "./svg/CheckSvg.vue";
import CloseSvg from "./svg/CloseSvg.vue";

const $booksStore = useBooksStore();

// eslint-disable-next-line no-undef
defineProps({
  type: String,
  book: Object,
});
</script>

<style lang="scss" scoped></style>
