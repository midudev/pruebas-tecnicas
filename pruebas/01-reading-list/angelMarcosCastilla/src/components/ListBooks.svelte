<script>
  import { booksStore } from "../store/books";
  import Books from "./Books.svelte";
</script>

<section>
  {#each $booksStore.filteredBooks as book}
    <Books {book} />
  {:else}
    <p>No hay libros</p>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1.5rem;
  }
</style>
