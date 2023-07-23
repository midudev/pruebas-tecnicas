<template>
  <h1>Reading List </h1> <h3>({{ readingListCount }})</h3>

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
h1, h2, h3, h4{
  display: inline;
}

.readlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  /* background-color: blueviolet; */
}
</style>