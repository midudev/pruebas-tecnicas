<script lang="ts">
  import { onMount } from 'svelte'
  import { appState } from '../store/app-state-store'
  import { asideState } from '../store/aside-store'

  let showBooks = false
  let topBooksList = []

  onMount(() => {
    topBooksList = $appState.readingBooks
      .filter((book) => book.stars > 0)
      .sort((a, b) => b.stars - a.stars)
    showBooks = $appState.readingBooks.length > 0 && topBooksList.length > 0
  })
</script>

{#if $asideState.topBooksListIsOpen}
  <aside
    class="fixed inset-y-0 right-0 z-3 w-2/6 h-full p-5 overflow-y-scroll bg-aside shadow-xl animate-slide-in"
  >
    <h2 class="text-2xl mb-5"><i>Top libros</i></h2>
    <ul class="flex flex-col">
      {#if showBooks}
        {#each topBooksList as book, index (book.ISBN)}
          <p>{book.title}</p>
        {/each}
      {:else}
        <li
          class="grid place-items-center h-16 bg-aside p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <p>Top de libros vacio! 😢</p>
        </li>
      {/if}
    </ul>
  </aside>
{/if}
