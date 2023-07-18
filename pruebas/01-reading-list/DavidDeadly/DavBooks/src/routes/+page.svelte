<script lang="ts">
  import { booksStore } from '$lib';
  import { onMount } from 'svelte';
  import Books from '../components/Books.svelte';
  import ReadingList from '../components/ReadingList.svelte';
  import DavBooksIcon from '../components/icons/DavBooksIcon.svelte';
  import { getFilteredBooks } from '$lib/services/books';

  const plural = new Intl.PluralRules('es');
  const NO_GENRES_FILTER = 'Todos';

  onMount(() => {
    booksStore.getState().getBooks();
    books = filterBooks();
  });

  let books: IBook[] = [];
  let numAvaileblesBooks: number = 0;
  let pagesSelectedRange: number = 0;
  let filteredGenre: string | undefined;
  let isOne: boolean = false;

  const filterBooks = () => {
    const genre =
      filteredGenre !== NO_GENRES_FILTER ? filteredGenre : undefined;
    return getFilteredBooks({
      genre,
      pages: pagesSelectedRange,
    });
  };

  $: {
    numAvaileblesBooks = $booksStore.getNumAvaileblesBooks(books);
    isOne = plural.select(numAvaileblesBooks) === 'one';
  }
</script>

<nav>
  <div class="icon">
    <DavBooksIcon width="100px" />
  </div>

  <h1>
    {numAvaileblesBooks}
    {isOne ? 'Libro' : 'Libros'} Disponibles
  </h1>
  <div style:opacity={$booksStore.books.length ? '1' : '0'} class="filters">
    <label for="pages">
      <span>Filtrar por páginas</span>
      <input
        id="pages"
        type="range"
        min={$booksStore.min}
        max={$booksStore.max}
        on:change={filterBooks}
        bind:value={pagesSelectedRange}
      />
      <div class="ranges">
        <span>{$booksStore.min}</span>
        <span>{pagesSelectedRange}</span>
      </div>
    </label>
    <label for="genre">
      <span>Filtrar por géneros</span>

      <select id="genre" bind:value={filteredGenre} on:change={filterBooks}>
        <option value={NO_GENRES_FILTER}>{NO_GENRES_FILTER}</option>
        {#each $booksStore.genres as genre}
          <option value={genre}>
            {genre}
          </option>
        {/each}
      </select>
    </label>
  </div>
</nav>
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

  nav,
  section {
    width: 60%;
  }

  section {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    margin-block: 25px;
    height: 150px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    color: var(--quaternary);
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .filters {
    display: flex;
    width: 60%;
    justify-content: space-between;
  }

  .ranges {
    display: flex;
    justify-content: space-between;
  }

  select {
    padding: 10px;
    border-radius: 15px;
  }

  label {
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
  }
</style>
