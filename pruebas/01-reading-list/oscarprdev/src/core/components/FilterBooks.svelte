<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { BooksFilters } from './types'
  import { appState } from '../store/store'
  import { onMount } from 'svelte'
  import type { Book } from '../types'

  export let filters: Writable<BooksFilters>
  let genres: string[]

  const onGenreSelectChanges = (e: Event) => {
    const target = e.target as HTMLSelectElement
    filters.update((prevState: BooksFilters) => ({
      ...prevState,
      genre: target.value,
    }))
  }

  onMount(() => {
    genres = [...new Set($appState.books.map((book: Book) => book.genre))]
  })
</script>

<section>
  <select on:change={onGenreSelectChanges}>
    {#if genres && genres.length > 0}
      <option disabled selected>Select genre</option>
      {#each genres as genre}
        <option value={genre}>{genre}</option>
      {/each}
      <option value="all">All</option>
    {/if}
  </select>
</section>
