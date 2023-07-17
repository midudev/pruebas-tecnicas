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

<section class="flex flex-col p-5 max-w-1100">
  <ul class="flex flex-wrap gap-7">
    {#each $booksList as book}
      <BookItem {book} />
    {/each}
  </ul>
  <Pagination {paginationState} {booksFiltered} />
</section>
