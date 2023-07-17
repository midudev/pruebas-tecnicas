<script lang="ts">
  import { writable, type Writable } from 'svelte/store';
  import type { BooksFilters } from './types';
  import { appState } from '../store/store';
  import { onMount } from 'svelte';
  import type { Book } from '../types';

  export let filters: Writable<BooksFilters>;
  let genres: string[];

  let dropdownIsOpen = writable(false);
  let genreSelected = writable(null)

  const onGenreSelectChanges = (genre: string) => {
    filters.update((prevState: BooksFilters) => ({
      ...prevState,
      genre,
    }));
    dropdownIsOpen.update(prev => !prev)
    genreSelected.update(() => genre)
  };

  const openDropdown = () => dropdownIsOpen.update(prev => !prev);

  onMount(() => {
    genres = [...new Set($appState.books.map((book: Book) => book.genre))];
  });
</script>

<section class="p-5 relative">
  <button
    data-dropdown-toggle="dropdown"
    class="text-light bg-dark font-medium rounded-full text-sm px-5 py-3 text-center inline-flex items-center"
    on:click={openDropdown}
  >
    {$genreSelected || 'Filtra por género'}<svg
      class="w-2.5 h-2.5 ml-2.5 + {$dropdownIsOpen
        ? 'transform rotate-180'
        : ''}"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg></button
  >
  {#if $dropdownIsOpen}
    <div class="absolute z-10 rounded-2xl shadow w-44 bg-light">
      <ul
        class="py-4 text-sm bg-dark rounded-2xl mt-1"
        aria-labelledby="dropdownDefaultButton"
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={() => onGenreSelectChanges(null)}>
          <p
            class="cursor-pointer block px-4 py-2 text-light hover:bg-nav hover:text-light"
          >
            Todos
          </p>
        </li>
        {#each genres as genre}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li on:click={() => onGenreSelectChanges(genre)}>
            <p
              class="cursor-pointer block px-4 py-2 text-light hover:bg-nav hover:text-light"
            >
              {genre}
            </p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</section>
