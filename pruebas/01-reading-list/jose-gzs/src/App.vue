<script setup>
import PageTitle from './components/PageTitle.vue'
import ReadingList from './components/ReadingList.vue'

</script>

<template>
  <div class="max-w-5xl mx-auto py-8">
    <header>
      <PageTitle msg="Book List" />
    </header>
    <main class="mt-8">
      <ReadingList />
    </main>
  </div>

</template>

<style scoped>

</style>
