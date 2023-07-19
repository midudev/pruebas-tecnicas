<script lang="ts">
  import { booksStore } from '$lib';

  import Books from './Books.svelte';
  import ReadingList from './ReadingList.svelte';

  export let books: IBook[];
</script>

<main>
  <section>
    <Books {books} booksAction={$booksStore.add} />
  </section>

  <ReadingList />
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
  }

  section {
    margin-bottom: 2rem;
    width: 60%;
  }
</style>
