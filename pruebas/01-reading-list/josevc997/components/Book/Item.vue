<script setup lang="ts">
import { Book } from "../../types/books";
import { PropType } from "vue";

const props = defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true,
  },
});
</script>
<template>
  <div class="border p-2 rounded-lg grid place-content-between grid-cols-1">
    <div class="pb-2">
      <h1 class="text-xl font font-medium">{{ book.book.title }}</h1>
      <p class="text-sm text-gray-500">{{ book.book.author.name }}</p>
    </div>
    <div class="aspect-[9/16] w-full">
      <img
        :src="book.book.cover"
        :alt="book.book.title"
        class="rounded-md object-cover h-full w-full"
      />
    </div>
  </div>
</template>
