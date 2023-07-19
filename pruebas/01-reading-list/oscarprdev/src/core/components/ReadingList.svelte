<script>
  import { asideState } from '../store/aside-store'
  import { appState } from '../store/app-state-store'
  import ReadingListItem from './ReadingListItem.svelte'
</script>

{#if $asideState.readingListIsOpen}
  <aside
    class="fixed inset-y-0 right-0 z-3 w-2/6 h-full overflow-y-scroll p-5 flex flex-col bg-aside shadow-xl animate-slide-in"
  >
    <h2 class="text-2xl mb-5"><i>Lista de lectura</i></h2>
    {#each $appState.readingBooks as book}
      <ReadingListItem {book} />
    {/each}
  </aside>
{/if}
