<script lang="ts">
  import { booksStore } from '$lib';
  import { readingImportanceMessages } from '$lib/mocks/reading';
  import AnimatedBooksTitle from './AnimatedBooksTitle.svelte';
  import Books from './Books.svelte';
  import ReadingMessages from './ReadingMessages.svelte';

  const plural = new Intl.PluralRules('es');
  let readingBooks: IBook[];
  let isOne: boolean;

  booksStore.subscribe(({ readingList, books }) => {
    readingBooks = readingList
      .map(id => books.find(b => b.ISBN === id))
      .filter(Boolean) as IBook[];

    isOne = plural.select(readingList.length) === 'one';
  });
</script>

<section>
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
  <aside class:no-books={readingBooks.length <= 0}>
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
