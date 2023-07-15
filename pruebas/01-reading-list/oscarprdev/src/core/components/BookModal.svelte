<script lang="ts">
  import { onMount } from 'svelte'
  import { modalState } from '../store/modal-store'
  import type { Book } from '../types'
  import { appState } from '../store/store'
  import { readable, type Writable } from 'svelte/store'
  import type { Readable } from 'svelte/motion'
</script>

{#if $modalState.isOpen}
  <dialog
    open
    data-modal-target="modal"
    class="absolute top-0 left-0 bg-opacity-5 bg-overlayBtnHover backdrop-blur-sm w-full h-full grid place-items-center z-1 open:animate-fade-in open:backdrop:animate-fade-in"
  >
    <div class="bg-light w-80 h-60 p-4 rounded-md">
      {$modalState.book.author.name}
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        on:click={() =>
          modalState.update((state) => ({ isOpen: false, book: null }))}
      >
        Close
      </button>
    </div>
  </dialog>
{/if}
