<script setup>
  import BookCard from './BookCard.vue';

  defineProps({
    books: Array,
    readingBooks: Array,
    booksCount: Number
  });

  const emit = defineEmits([
    'handleDragStartOnMobile',
    'handleDragOnMobile',
    'handleDragEndOnMobile',
    'handleDragStart',
    'handleDragOver',
    'handleDrop',
    'handleDragEnd',
    'removeFromReadingBooks'
  ]);

</script>

<template>
  <section 
    class="scroll reading-books-scroll"
    id="reading-books-scroll"
  >
    <div 
      class="reading-books" 
      v-if="readingBooks.length > 0"
    >
      <div 
        class="book" 
        v-for="(book, index) in readingBooks" 
        :key="book[0].book.ISBN" 
        :index="index" 
        :draggable="true"
        @touchmove="(e) => { emit('handleDragOnMobile', e) }" 
        @touchend="(e) => { emit('handleDragEndOnMobile', e) }" 
        @dragstart="$emit('handleDragStart', index)"
        @dragover="(e) => { emit('handleDragOver', e) }" 
        @drop="$emit('handleDrop', index)" 
        @dragend="$emit('handleDragEnd')"
      >
        <BookCard 
          @touchstart="(e) => { emit('handleDragStartOnMobile', e, index) }" 
          :book="book[0].book"
        />
        <button @click="$emit('removeFromReadingBooks', book[0].book.ISBN)">
          ❌
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

  button{
    border: none;
    border-radius: 0 0 5px 5px;
  }

  button:hover{
    border: none;
  }

  button:focus{
    outline: none;
  }

</style>