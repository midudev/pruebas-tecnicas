<script lang="ts">
  import type { Book } from '../types'
  import BookItem from './BookItem.svelte'
  import type { Readable } from 'svelte/motion'
  import Pagination from './Pagination.svelte'

  export let booksList: Readable<Book[]>
  export let booksFiltered: Readable<Book[]>
</script>

<section class="flex flex-col p-5">
  <ul class="flex flex-wrap gap-7 w-800 h-300 xl:w-1090 xl:h-400">
    {#if $booksList.length > 0}
      {#each $booksList as book, index (book.ISBN)}
        <BookItem {book} {index} />
      {/each}
    {:else}
      <li
        class="grid place-items-center h-16 bg-aside p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <p>No se han encontrado libros disponibles! 😰</p>
      </li>
    {/if}
  </ul>
  <Pagination {booksFiltered} />
</section>
