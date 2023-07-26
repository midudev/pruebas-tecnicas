<template>
  <div class="Readlist">
    <h1>{{ readingListCount }} libros en favoritos </h1>

    <div class="Readlist-Tags">
      <button class="Readlist-Tags-Button" v-for="tag in genres" :key="tag" @click="onSelectedGenre(tag)">
        {{ tag }}
      </button>
    </div>

    <div class="Readlist-List">
      <div class="BookCard-Grid" v-for="(book, index) in store.readlist" :key="index">
        <BookCard :book="book" @click="store.removeFromReadList(book)" />
      </div>
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
  margin: 0 auto;
}

h1 {
  display: inline;
  font-size: var(--font-size-h1);
}

.Readlist-List {
  display: grid;
  grid-template-columns: repeat(5, auto);
  margin-top: 1.35em;
}

.Readlist-Tags {
  padding-top: 15px;
  padding-bottom: 10px;
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