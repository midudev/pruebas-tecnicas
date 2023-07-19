<script lang="ts">
  import { derived } from 'svelte/store'
  import type { PaginationState } from './types'
  import type { Book } from '../types'
  import type { Readable } from 'svelte/motion'
  import { ArrowRightIcon, ArrowLeftIcon } from 'svelte-feather-icons'
  import { paginationState } from '../store/pagination-store'

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

  let leftIconIsDisabled = derived(
    paginationState,
    ($paginationState) => $paginationState.init <= 0
  )
  let rightIconIsDisabled = derived(
    [paginationState, booksFiltered],
    ([$paginationState, $booksFiltered]) =>
      $booksFiltered && $paginationState.offset >= $booksFiltered.length
  )
</script>

{#if $booksFiltered.length > 4}
  <section
    class="self-end flex gap-5 py-2 px-5 bg-dark rounded-full mr-12 mt-4"
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <button
      class={!$leftIconIsDisabled && 'cursor-pointer'}
      on:click={showPrev}
      disabled={$leftIconIsDisabled}
    >
      <ArrowLeftIcon
        size="32"
        class={$leftIconIsDisabled
          ? 'text-icons'
          : 'text-light transtion-text-pagination duration-300 hover:text-pagination'}
      />
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <button
      class={!$rightIconIsDisabled && 'cursor-pointer'}
      on:click={showNext}
      disabled={$rightIconIsDisabled}
    >
      <ArrowRightIcon
        size="32"
        class={$rightIconIsDisabled
          ? 'text-icons'
          : 'text-light transtion-text-pagination duration-300 hover:text-pagination'}
      />
    </button>
  </section>
{/if}
