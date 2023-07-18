<script>
  import { asideState } from '../store/aside-store'
  import { appState } from '../store/store'

  console.log($appState.readingBooks)
</script>

{#if $asideState.readingListIsOpen}
  <aside class="fixed inset-y-0 right-0 z-10 w-2/6 bg-aside">
    <div class="h-full flex flex-col overflow-y-auto bg-white shadow-xl">
      {#each $appState.readingBooks as book}
        <p>{book.title}</p>
      {/each}
    </div>
  </aside>
{/if}
