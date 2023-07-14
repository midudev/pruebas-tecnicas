<script setup>
import PageTitle from './components/PageTitle.vue'
import ReadingList from './components/ReadingList.vue'

</script>

<template>
  <div class="container mx-auto py-8">
    <header>
      <PageTitle msg="Reading List" />
    </header>
    <main>
      <ReadingList />
    </main>
  </div>

</template>

<style scoped>

</style>
