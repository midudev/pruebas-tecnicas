<script lang="ts">
  import { booksStore } from '$lib';
  import { NO_GENRES_FILTER } from '$lib/constants';
  import { useBookFilteredEvent } from '$lib/events/booksFiltered';
  import DavBooksIcon from './icons/DavBooksIcon.svelte';

  export let numAvaileblesBooks: number = 0;
  const plural = new Intl.PluralRules('es');
  const { sendBooksFiltered } = useBookFilteredEvent();

  let maxPages: number = $booksStore.max;
  let genre: string = NO_GENRES_FILTER;
  $: sendBooksFiltered({ genre, maxPages });

  let isOne: boolean = false;
  $: isOne = plural.select(numAvaileblesBooks) === 'one';
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
        on:change|nonpassive={ev => console.log('changing', ev)}
        bind:value={maxPages}
      />
      <div class="ranges">
        <span>{$booksStore.min}</span>
        <span>{maxPages}</span>
      </div>
    </label>
    <label for="genre">
      <span>Filtrar por géneros</span>

      <select id="genre" bind:value={genre}>
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

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  nav {
    width: 60%;
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
