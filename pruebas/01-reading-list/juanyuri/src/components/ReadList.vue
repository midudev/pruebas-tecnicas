<template>
  <h1>Reading List ({{ readingListCount }})</h1>

  <div class="readlist"> <!-- change to reading list styling -->
    <BookCard v-for="book in store.readlist" :key="book.title" :book="book" @click="store.removeFromReadList(book)" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/stores/BookStore.js'
import BookCard from '@/components/BookCard.vue'

/* Use the store */
const store = useStore()

const readingListCount = computed(() => store.readlist.length)
</script>

<style scoped>
.readlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: blueviolet;
}
</style>