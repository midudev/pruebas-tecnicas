<script lang="ts">
  import Books from './Books.svelte';
  import { readingImportanceMessages } from '$lib/mocks/reading';
  import ReadingMessages from './ReadingMessages.svelte';
  import { booksStore } from '$lib/books.store';
  import { fade } from 'svelte/transition';
  import { quadInOut } from 'svelte/easing';

  const plural = new Intl.PluralRules('es');
  let readingBooks: IBook[];
  let isOne: boolean;

  booksStore.subscribe(({ readingList, freeBooks }) => {
    readingBooks = readingList
      .map(id => {
        const readingBook = freeBooks.find(book => book.ISBN === id);
        if (!readingBook) return null;

        const { free, ...book } = readingBook;

        return book;
      })
      .filter(Boolean) as IBook[];

    isOne = plural.select(readingBooks.length) === 'one';
  });
</script>

<section>
  {#key readingBooks.length}
    <h3 in:fade={{ easing: quadInOut }}>
      {#if readingBooks.length}
        <span>{readingBooks.length}</span>
        {isOne ? 'Libro' : 'Libros'} para leer
      {:else}
        Lista de Lectura
      {/if}
    </h3>
  {/key}
  <aside class:no-books={readingBooks.length <= 0}>
    {#if readingBooks.length <= 0}
      <ReadingMessages messages={readingImportanceMessages} />
    {:else}
      <Books
        books={readingBooks}
        showBooksInfo={false}
        booksWidth="200px"
        booksAction={$booksStore.remove}
      />
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
