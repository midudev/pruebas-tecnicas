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
  import SwitchBook from './SwitchBook.svelte'
  import { orderList } from '../store/order-list.store'

  export let book: Book
  export let index: number

  let showAnimation: any
  let showOverlay: Writable<boolean> = writable(false)

    const handleDragStart = (book, index) => {
      orderList.update((prev) => ({
        ...prev,
        start: {
          index,
          book
        }
      }))
    }

    const handleDrop = (book, index) => {
      orderList.update((prev) => ({
        ...prev,
        end: {
          index,
          book
        }
      }))
    }

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

  onMount(() => {
    showAnimation = index === 0 && $actionsStore.readingListItemAdded && $appState.readingBooks.length > 1
  })
</script>

<li
  class=" flex gap-5 my-2 p-2 transform-color duration-300 hover:bg-overlayBtnHover cursor-grab xl:h-64 xl:w-full {showAnimation
    ? 'animate-item-in'
    : 'animate-fade-in'}"
  draggable="true"
  on:dragstart={() => handleDragStart(book, index)}
  on:dragover={(event) => event.preventDefault()}
  on:drop={() => handleDrop(book, index)}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="relative h-full w-[150px] xl:w-[150px] shadow-[-4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]"
    on:mouseenter={handleOverlay}
    on:mouseleave={handleOverlay}
  >
    <img class="w-full h-full object-cover" src={book.cover} alt={book.title} />
    {#if $showOverlay}
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-3 bg-black backdrop-blur-sm"
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
  <section class="flex flex-col gap-4 w-4/6 xl:max-w-[200px]">
    <h3 class="text-lg truncate max-w-[120px] xl:max-w-none">{book.title}</h3>
    <h4 class="text-sm mt-[-10px]"><i>{book.author.name}</i></h4>
    <span
      class="py-1.5 px-4 text-sm w-fit rounded-full bg-overlayModal text-light"
      >{book.genre}</span
    >
    <StarsCounter {book} />
    <SwitchBook {book} />
  </section>
</li>
