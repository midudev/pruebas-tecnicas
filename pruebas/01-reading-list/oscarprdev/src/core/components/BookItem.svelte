<script lang="ts">
  import { writable, type Writable } from 'svelte/store'
  import { stateUseCase } from '../store/store'
  import type { Book } from '../types'
  import { onMount } from 'svelte'
  import { modalState } from '../store/modal-store'

  export let book: Book
  let showOverlay: Writable<boolean> = writable(false)

  const handleOverlay = () => {
    showOverlay.update((value) => !value)
  }

  const showInfo = () => {
    modalState.update(() => ({
      isOpen: true,
      book
    }))
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="flex flex-col gap-4 w-60 relative h-400"
  on:mouseenter={handleOverlay}
  on:mouseleave={handleOverlay}
>
  <div class="h-5/6 shadow-[4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]">
    <img class="w-full h-full object-cover" src={book.cover} alt={book.title} />
  </div>
  <div class="flex flex-col gap-2 max-w-xs overflow-hidden">
    <h2 class="text-lg truncate ml-2">{book.title}</h2>
  </div>
  {#if $showOverlay}
    <div
      class="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-3 bg-black backdrop-blur-sm"
    >
      <button
        class="px-4 py-2 bg-overlayBtn text-black cursor-pointer hover:bg-overlayBtnHover"
        on:click={showInfo}>Info</button
      >
      <button
        class="px-4 py-2 bg-overlayBtn text-black cursor-pointer hover:bg-overlayBtnHover"
        >Add</button
      >
    </div>
  {/if}
</li>
