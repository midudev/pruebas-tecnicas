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
.Readlist {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  display: inline;
  font-size: var(--font-size-h1);
}

.Readlist-List {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 2em;
  margin-top: 1.35em;
}

.Readlist-Tags {
  padding-top: 15px;
  padding-bottom: 10px;
  /* background-color: blue; */
}

.Readlist-Tags-Button {
  width: auto;
  padding: var(--button-padding);
  cursor: pointer;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  margin: 15px;
}

.Readlist-Tags-Button:hover {
  background-color: var(--primary-color);
  border: 1px solid transparent;
  /* font-weight: bold; */
  color: white;
}

.BookCard-Grid {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>