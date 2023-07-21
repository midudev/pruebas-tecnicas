<script lang="ts">
  import { appState } from './../store/app-state-store'
  import { readingListUsecase } from './../../features/reading-list/index'
  import { orderList } from './../store/order-list.store'
  import { asideState } from '../store/aside-store'
  import ReadingListItem from './ReadingListItem.svelte'
  import { derived } from 'svelte/store'

  let sortedBooks = derived(orderList, ($orderList) => {
    if ($orderList.end.book) {
      readingListUsecase.sortBooks($orderList)

      orderList.update(() => ({
        start: {
          index: 0,
          book: null,
        },
        end: {
          index: 0,
          book: null,
        },
      }))
    }

    return $appState.readingBooks
  })
</script>

{#if $asideState.readingListIsOpen}
  <aside
    class="fixed inset-y-0 right-0 z-3 h-full mt-[100px] p-5 overflow-y-scroll bg-aside shadow-xl animate-slide-in xl:w-2/6 xl:mt-0"
  >
    <h2 class="text-2xl mb-5"><i>Lista de lectura</i></h2>
    <ul class="flex flex-col">
      {#if $sortedBooks.length > 0}
        {#each $sortedBooks as book, index (book.ISBN)}
          <ReadingListItem {book} {index} />
        {/each}
      {:else}
        <li
          class="grid place-items-center h-16 bg-aside p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <p>Lista de lectura vacia! 😢</p>
        </li>
      {/if}
    </ul>
  </aside>
{/if}
