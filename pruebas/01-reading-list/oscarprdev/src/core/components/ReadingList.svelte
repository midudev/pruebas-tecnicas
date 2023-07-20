<script>
  import { asideState } from '../store/aside-store'
  import { appState } from '../store/app-state-store'
  import ReadingListItem from './ReadingListItem.svelte'
</script>

{#if $asideState.readingListIsOpen}
  <aside
    class="fixed inset-y-0 right-0 z-3 h-full mt-[100px] p-5 overflow-y-scroll bg-aside shadow-xl animate-slide-in xl:w-2/6 xl:mt-0"
  >
    <h2 class="text-2xl mb-5"><i>Lista de lectura</i></h2>
    <ul class="flex flex-col">
      {#if $appState.readingBooks.length > 0}
        {#each $appState.readingBooks as book, index (book.ISBN)}
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
