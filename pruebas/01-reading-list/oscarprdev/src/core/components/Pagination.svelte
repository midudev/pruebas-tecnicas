<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { PaginationState } from './types'
  import type { Book } from '../types'
  import type { Readable } from 'svelte/motion'

  export let paginationState: Writable<PaginationState>
  export let booksFiltered: Readable<Book[]>

  const showNext = () => {
    paginationState.update((prevState: PaginationState) => ({
      init: prevState.init + 4,
      offset: prevState.offset + 4,
    }))
  }

  const showPrev = () => {
    paginationState.update((prevState: PaginationState) => ({
      init: prevState.init - 4,
      offset: prevState.offset - 4,
    }))
  }
</script>

<section>
  {#if $paginationState.init > 0}
    <button
      class="border border-black px-5 py-2 cursor-pointer hover:bg-pagBtn transition-colors ease-in"
      on:click={showPrev}>Prev</button
    >
  {/if}
  {#if $booksFiltered && $paginationState.offset < $booksFiltered.length}
    <button
      class="border border-black px-5 py-2 cursor-pointer hover:bg-pagBtn transition-colors ease-in"
      on:click={showNext}>Next</button
    >
  {/if}
</section>
