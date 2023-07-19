<script lang="ts">
  import { modalStore } from '../store/modal-store'
  import type { Book } from '../types'
  import { XCircleIcon, StarIcon } from 'svelte-feather-icons'
  import { writable, type Writable } from 'svelte/store'
  import Modal from './modals/Modal.svelte'
  import RemoveModal from './modals/RemoveModal.svelte'
  import { actionsStore } from '../store/actions-store'
  import { onMount } from 'svelte'
  import { appState } from '../store/app-state-store'
  import StarsCounter from './StarsCounter.svelte'

  export let book: Book
  export let index: number

  let showOverlay: Writable<boolean> = writable(false)

  const handleOverlay = () => {
    showOverlay.update((value) => !value)
  }

  const openRemoveModal = () => {
    modalStore.update((modal: Modal) => {
      modal.openModal({
          component: RemoveModal,
          content: {
            book
          }
        });

        return modal
    });
  }

  
  let showAnimation: any

  let hoveredIndex = null;

function handleStarHover(index) {
  hoveredIndex = index;
}

function handleStarLeave() {
  hoveredIndex = null;
}

onMount(() => {
  // Reset the hoveredIndex when the component mounts
  hoveredIndex = null;
});

  onMount(() => {
    showAnimation = index === 0 && $actionsStore.readingListItemAdded && $appState.readingBooks.length > 1
  })
</script>

<li
  class="relative flex w-full gap-3 h-64 my-2 p-2 {showAnimation
    ? 'animate-item-in'
    : 'animate-fade-in'}"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="w-2/6 h-full shadow-[-4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]"
    on:mouseenter={handleOverlay}
    on:mouseleave={handleOverlay}
  >
    <img class="w-full h-full" src={book.cover} alt={book.title} />
    {#if $showOverlay}
      <div
        class="absolute top-0 left-0 w-2/6 h-full flex items-center justify-center gap-3 bg-black backdrop-blur-sm"
      >
        <div class="flex items-center bg-dark bg-opacity-80 rounded-3xl">
          <button
            class="px-2 py-2 text-black cursor-pointer"
            on:click={openRemoveModal}
            ><XCircleIcon
              size="30"
              class="text-light duration-300 hover:text-pagination"
            /></button
          >
        </div>
      </div>
    {/if}
  </div>
  <section class="flex flex-col gap-2 w-4/6">
    <h3 class="text-lg">{book.title}</h3>
    <h4 class="text-sm"><i>{book.author.name}</i></h4>
    <span
      class="py-1.5 px-4 text-sm w-fit rounded-full bg-overlayModal text-light"
      >{book.genre}</span
    >
    <StarsCounter {book} />
  </section>
</li>
