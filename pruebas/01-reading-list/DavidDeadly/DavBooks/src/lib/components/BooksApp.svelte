<script lang="ts">
  import { booksStore } from '$lib';
  import { page } from '$app/stores';

  import Books from './Books.svelte';
  import ReadingList from './ReadingList.svelte';

  export let filteredBooks: IBook[];
  let readingBooks: IBook[] = [];

  $: readingBooks = $booksStore.readingList
    .map(id => $page.data.books.find(b => b.ISBN === id))
    .filter(Boolean) as IBook[];
</script>

<main>
  <section>
    <Books books={filteredBooks} booksAction={$booksStore.add} />
  </section>

  <aside>
    <ReadingList {readingBooks} />
  </aside>
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

  aside {
    color: var(--quaternary);
    text-align: center;
    width: 35%;
    position: fixed;
    right: 5%;
    inset-block: 20px;
  }
</style>
