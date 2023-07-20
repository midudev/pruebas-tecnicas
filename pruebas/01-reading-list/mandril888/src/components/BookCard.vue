<template>
  <div>
    <img
      :src="book.book.cover"
      :alt="book.book.title"
      class="w-full object-cover rounded-lg shadow-md max-h-96"
    />
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-md shadow-lg">
        <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
          {{ book.book.title }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  book: Object,
});
</script>

<style lang="scss" scoped></style>
