<script lang="ts">
  import { booksStore } from '$lib';

  import Books from './Books.svelte';
  import ReadingList from './ReadingList.svelte';

  export let books: IBook[];
  let readingBooks: IBook[] = [];

  $: readingBooks = $booksStore.readingList
    .map(id => books.find(b => b.ISBN === id))
    .filter(Boolean) as IBook[];
</script>

<main>
  <section>
    <Books {books} booksAction={$booksStore.add} />
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
