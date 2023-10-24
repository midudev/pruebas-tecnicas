<script setup>
  import BookCard from './BookCard.vue';

  const props = defineProps({
    books: Array,
    readingBooks: Array
  });

  const isAdded = (id) => {
    return props.readingBooks.some((book) => {
      return book[0].book.ISBN === id;
    })
  }

  defineEmits([
    'addToReadingBooks',
  ]);

</script>

<template>
  <div 
    class="book" 
    v-for="book in books" 
    :key="book.book.ISBN"
  >
    <BookCard :book="book.book" />
    <button 
      class="add" 
      v-if="!isAdded(book.book.ISBN)" 
      @click="$emit('addToReadingBooks', book.book.ISBN)"
    >
      Añadir
    </button>
    <button 
      class="added" 
      v-else
    >
      Añadido
    </button>
  </div>
</template>

<style scoped>

.book .added{
  color: #999;
  cursor: auto;
}

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