<script lang="ts">
  import BooksAvailable from "./components/BooksAvailable.svelte";
  import Filters from "./components/Filters.svelte";
  import ReadingList from "./components/ReadingList.svelte";
</script>

<main>
  <h2>Explorar</h2>
  <Filters />
  <ReadingList />
  <BooksAvailable />
</main>

<style>
  h2 {
    font-size: 36px;
  }
</style>
