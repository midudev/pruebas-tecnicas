<script lang="ts">
  import type { Writable } from 'svelte/store'
  import type { PaginationState } from './types'
  import type { Book } from '../types'
  import type { Readable } from 'svelte/motion'
  import { ArrowRightIcon, ArrowLeftIcon } from 'svelte-feather-icons'

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

<section class="self-end flex gap-5">
  {#if $paginationState.init > 0}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cursor-pointer" on:click={showPrev}>
      <ArrowLeftIcon
        size="32"
        class="transtion-text-pagination duration-300 hover:text-pagination"
      />
    </div>
  {/if}
  {#if $booksFiltered && $paginationState.offset < $booksFiltered.length}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="cursor-pointer" on:click={showNext}>
      <ArrowRightIcon
        size="32"
        class="transtion-text-pagination duration-300 hover:text-pagination"
      />
    </div>
  {/if}
</section>
