<script lang="ts">
  import { onMount } from "svelte";
  import { booksStore } from "./store/books";
  import ListBooks from "./components/ListBooks.svelte";
  import Filters from "./components/Filters.svelte";

  onMount(() => {
    booksStore.getAllBooks();
    window.addEventListener("storage", () => {
      booksStore.sincronizeFavorites();
    });
  });

  //
</script>

<section>
  <Filters />
  <ListBooks />
</section>

<style>
  section {
    margin: 0 auto;
    width: min(100%, 1300px);
  }
</style>
