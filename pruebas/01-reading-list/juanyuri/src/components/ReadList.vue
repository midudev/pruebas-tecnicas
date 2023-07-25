<template>

  <div class="Readlist">
    <h1>Favoritos: {{ readingListCount }}</h1>

    <div class="Readlist-List">
      <BookCard v-for="book in store.readlist" :key="book.title" :book="book" @click="store.removeFromReadList(book)" />
    </div>
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
.Readlist{
  display: block;
  padding-left:3em;
  padding-top:2em;
}

h1 {
  display: inline;
  font-size: 25px;
  margin-left:10px;
}

.Readlist-List {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top:0.75em;
}
</style>