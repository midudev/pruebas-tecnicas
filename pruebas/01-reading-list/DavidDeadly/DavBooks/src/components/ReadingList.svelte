<script lang="ts">
  import Books from './Books.svelte';
  import { readingImportanceMessages } from '$lib/mocks/reading';
  import ReadingMessages from './ReadingMessages.svelte';
  import { readingList } from '$lib/reading.store';
</script>

<section>
  <h3>Lista de lectura</h3>
  <aside class:no-books={$readingList.value.length <= 0}>
    {#if $readingList.value.length <= 0}
      <ReadingMessages messages={readingImportanceMessages} />
    {:else}
      <Books books={$readingList.value} showBooksInfo={false} booksWidth="200px" />
    {/if}
  </aside>
</section>

<style>
  section {
    color: var(--quaternary);
    text-align: center;
    width: 35%;
    position: fixed;
    right: 5%;
    inset-block: 20px;
  }

  aside {
    background-color: var(--secondary);
    padding: 20px;
    border-radius: 10px;
    height: 78vh;
    max-width: 550px;
    margin-inline: auto;
    box-shadow: var(--quaternary) 0px 0px 10px 0px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .no-books {
    display: grid;
    gap: 10px;
    align-content: center;
  }

  h3 {
    font-family: 'Roboto Slab Variable', sans-serif;
    font-style: italic;
    font-weight: bolder;
    font-size: 3.5rem;
    margin-block: 15px;
  }
</style>
