<template>
  <main>
    <NavigationBar />

    <br>
    <div class="BookCatalogueContainer">
      <BookCatalogue />
    </div>
    <div class="ReadListContainer">
      <ReadList />
    </div>
  </main>
</template>
  
<script setup>
import BookCatalogue from '@/components/BookCatalogue.vue'
import ReadList from '@/components/ReadList.vue'
import NavigationBar from '@/components/NavigationBar.vue';
</script>
  
<style scoped>
/* BookCatalogue */
.BookCatalogueContainer {
  margin-top: 2em;
}

/* ReadList */
.ReadListContainer {
  margin-top: 2em;
}
</style>