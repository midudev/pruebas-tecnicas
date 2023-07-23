<script lang="ts">
  import type { Book } from '../types'
  import BookItem from './BookItem.svelte'
  import type { Readable } from 'svelte/motion'
  import Pagination from './Pagination.svelte'

  export let booksList: Readable<Book[]>
  export let booksFiltered: Readable<Book[]>
</script>

<section class="flex flex-col p-5" data-testid="books-list">
  <ul
    class="flex flex-wrap w-screen gap-4 xl:gap-7 xl:w-[650px] xl:h-[250px] xxl:w-[780px] xxl:h-[200px]"
  >
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
