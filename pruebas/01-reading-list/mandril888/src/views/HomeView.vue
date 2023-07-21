<template>
  <div class="home text-center">
    <h1
      class="my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Books catalog
    </h1>
    <p
      class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
    >
      X libros disponibles
    </p>
    <BooksList />
  </div>
</template>

<script setup>
import BooksList from "@/components/BooksList.vue";
</script>
