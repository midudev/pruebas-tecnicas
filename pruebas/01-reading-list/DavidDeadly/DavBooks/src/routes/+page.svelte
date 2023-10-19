<script lang="ts">
  import { booksStore } from '$lib';
  import Header from '$lib/components/Header.svelte';
  import BooksApp from '$lib/components/BooksApp.svelte';

  export let data;
  let books: IBook[] = data.books;

  let numAvaileblesBooks: number = 0;
  $: numAvaileblesBooks = $booksStore.getNumAvaileblesBooks(books);
</script>

<svelte:head>
  <title>DavBooks</title>
  <meta name="description" content="DavBooks Library" />
</svelte:head>

<Header
  {numAvaileblesBooks}
  on:filteredBooks={({ detail: filteredBooks }) => (books = filteredBooks)}
/>
<BooksApp filteredBooks={books} />
