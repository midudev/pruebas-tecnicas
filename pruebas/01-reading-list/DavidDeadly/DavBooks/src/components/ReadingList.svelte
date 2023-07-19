<script lang="ts">
  import { booksStore } from '$lib';
  import { readingImportanceMessages } from '$lib/mocks/reading';
  import AnimatedBooksTitle from './AnimatedBooksTitle.svelte';
  import Books from './Books.svelte';
  import ReadingMessages from './ReadingMessages.svelte';

  export let readingBooks: IBook[];
</script>

<AnimatedBooksTitle
  noun={{
    singular: 'Libro',
    plural: 'Libros',
  }}
  headerType="h3"
  numBooks={readingBooks.length}
  booksTitle="para leer"
  noBooksTitle="Lista de Lectura"
/>
<div class:no-books={readingBooks.length <= 0}>
  {#if readingBooks.length <= 0}
    <ReadingMessages messages={readingImportanceMessages} />
  {:else}
    <Books
      books={readingBooks}
      isReadingList={true}
      booksWidth="150px"
      booksAction={$booksStore.remove}
    />
  {/if}
</div>

<style>
  div {
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
</style>
