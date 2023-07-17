<script lang="ts">
  import type { Book } from '../types'
  import BookItem from './BookItem.svelte'
  import type { Readable } from 'svelte/motion'
  import Pagination from './Pagination.svelte'
  import type { PaginationState } from './types'
  import type { Writable } from 'svelte/store'

  export let booksList: Readable<Book[]>
  export let paginationState: Writable<PaginationState>
  export let booksFiltered: Readable<Book[]>
</script>

<section class="flex flex-col p-5 min-w-fit">
  <ul class="flex flex-wrap gap-7">
    {#if $booksList.length > 0}
      {#each $booksList as book}
        <BookItem {book} />
      {/each}
    {:else}
      <li
        class="grid place-items-center bg-aside p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <p>No se han encontrado libros disponibles</p>
      </li>
    {/if}
  </ul>
  <Pagination {paginationState} {booksFiltered} />
</section>
