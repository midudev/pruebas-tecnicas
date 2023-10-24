<script setup>

defineProps({
  book: Object,
});

</script>

<template>
  <img 
    class="cover" 
    :src="book.cover" 
    :alt="book.title"
  >
</template>

<style scoped>
.cover{
  object-fit: cover;
  width: 100%;
  aspect-ratio: 2/3;
}

</style>
