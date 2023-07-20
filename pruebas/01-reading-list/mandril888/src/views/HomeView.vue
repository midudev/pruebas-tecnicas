<template>
  <div class="home text-center max-w-screen-xl m-auto">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Books catalog
    </h1>
    <p
      class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      X libros disponibles
    </p>
    <BooksList />
  </div>
</template>

<script setup>
import BooksList from "@/components/BooksList.vue";
</script>
