<script lang="ts">
  import { booksStore } from '$lib';
  import { onMount } from 'svelte';
  import Books from '../components/Books.svelte';
  import ReadingList from '../components/ReadingList.svelte';
  import DavBooksIcon from '../components/icons/DavBooksIcon.svelte';

  onMount(() => booksStore.getState().fillFreeBooks());

  const plural = new Intl.PluralRules('es');
  const NO_GENRES_FILTER = 'Todos';
  let isOne: boolean;
  let pagesSelectedRange: number = 0;
  let filteredGenre: string | undefined;

  booksStore.subscribe(({ numFreeBooks, minPages, filters }) => {
    isOne = plural.select(numFreeBooks) === 'one';
    filteredGenre = filters?.genre ? filters.genre : NO_GENRES_FILTER;
    pagesSelectedRange = filters?.pages ? filters.pages : minPages;
  });

  const filterBooks = () => {
    const genre = filteredGenre !== NO_GENRES_FILTER ? filteredGenre : undefined;

    $booksStore.filterBooks({
      genre,
      pages: pagesSelectedRange,
    });
  };
</script>

<nav>
  <div class="icon">
    <DavBooksIcon width="100px" />
  </div>

  <h1>
    {$booksStore.numFreeBooks}
    {isOne ? 'Libro' : 'Libros'} Disponibles
  </h1>
  <div style:opacity={$booksStore.books.length ? '1' : '0'} class="filters">
    <label for="pages">
      <span>Filtrar por páginas</span>
      <input
        id="pages"
        type="range"
        min={$booksStore.minPages}
        max={$booksStore.maxPages}
        on:change={filterBooks}
        bind:value={pagesSelectedRange}
      />
      <div class="ranges">
        <span>{$booksStore.minPages}</span>
        <span>{pagesSelectedRange}</span>
      </div>
    </label>
    <label for="genre">
      <span>Filtrar por géneros</span>

      <select id="genre" bind:value={filteredGenre} on:change={filterBooks}>
        <option value={NO_GENRES_FILTER}>{NO_GENRES_FILTER}</option>
        {#each $booksStore.booksGenres as genre}
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
    <Books books={$booksStore.freeBooks} booksAction={$booksStore.add} />
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
