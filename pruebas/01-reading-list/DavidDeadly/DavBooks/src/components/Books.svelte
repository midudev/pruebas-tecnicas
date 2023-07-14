<script lang="ts">
  import Book from './Book.svelte';

  export let books: IBook[];
  export let booksWidth = '250px';
  export let showBooksInfo = true;
</script>

<ul class="books" style="--booksWidth:{booksWidth}">
  {#each books as book}
    <Book {book} showInfo={showBooksInfo} --booksWidth={booksWidth} />
  {/each}
</ul>

<style>
  .books {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(var(--booksWidth), 1fr));
  }
</style>
