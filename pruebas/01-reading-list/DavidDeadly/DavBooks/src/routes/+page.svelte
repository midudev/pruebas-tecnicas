<script lang="ts">
  import { onMount } from 'svelte';

  import { booksStore } from '$lib';
  import Header from '../components/Header.svelte';
  import BooksApp from '../components/BooksApp.svelte';

  onMount(() => booksStore.getState().getBooks());

  let books: IBook[] = $booksStore.books;

  let numAvaileblesBooks: number = 0;
  $: numAvaileblesBooks = $booksStore.getNumAvaileblesBooks(books);
</script>

<Header
  {numAvaileblesBooks}
  on:filteredBooks={({ detail: filteredBooks }) => (books = filteredBooks)}
/>
<BooksApp {books} />
