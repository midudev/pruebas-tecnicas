<script setup lang="ts">
import ReadingBooks from "./components/ReadingBooks.vue"
import AvailableBooks from "./components/AvailableBooks/AvailableBooks.vue";
import Filters from "./components/Filters/Filters.vue";
</script>

<template>
     <main
          class="bg-bg flex flex-col justify-center items-center text-text py-16 gap-8 px-8 md:flex-row md:items-stretch md:h-screen">
          <div class="flex flex-col max-w-3xl w-full">
               <Filters />
               <AvailableBooks />
          </div>
          <ReadingBooks />
     </main>
</template>