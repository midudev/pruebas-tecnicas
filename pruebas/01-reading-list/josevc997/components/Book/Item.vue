<script setup lang="ts">
import { Book } from "../../types/books";
import { PropType } from "vue";

const props = defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true,
  },
  isAdded: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <div
    class="border rounded-lg grid place-content-between grid-cols-1 relative cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out"
  >
    <div
      class="absolute h-full w-full hover:bg-slate-900/60 flex justify-center items-center text-base font-bold rounded-lg transition-all duration-500 ease-in-out hover:text-white text-transparent"
    >
      <p class="text-center">
        {{ isAdded ? "Quitar de lista" : "Agregar a lista" }}
      </p>
    </div>
    <!-- <div class="pb-2">
      <h1 class="text-xl font font-medium">{{ book.book.title }}</h1>
      <p class="text-sm text-gray-500">{{ book.book.author.name }}</p>
    </div> -->
    <div class="aspect-[9/16] w-full">
      <img
        :src="book.book.cover"
        :alt="book.book.title"
        class="rounded-md object-cover h-full w-full"
      />
    </div>
  </div>
</template>
