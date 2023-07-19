<script lang="ts">
  import { writable, type Writable } from 'svelte/store'
  import type { Book } from '../types'
  import { InfoIcon, BookOpenIcon } from 'svelte-feather-icons'
  import { modalState } from '../store/modal-store'
  import { readingListUsecase } from '../../features/reading-list'
  import { asideState } from '../store/aside-store'

  export let book: Book
  let showOverlay: Writable<boolean> = writable(false)

  const handleOverlay = () => {
    showOverlay.update((value) => !value)
  }

  const showInfo = () => {
    modalState.update((prev) => ({
      ...prev,
      infoModal: {
        isOpen: true,
        book
        }
    }))
  }

  const addBookToReadingList = () => {
    readingListUsecase.addBook(book)

    asideState.update(() => ({
      readingListIsOpen: true,
      topBooksListIsOpen: false
    }))
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="flex flex-col gap-4 w-40 relative h-300 xl:w-60 xl:h-400"
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
      <div class="flex items-center bg-dark bg-opacity-80 rounded-3xl">
        <button class="px-4 py-2 text-black cursor-pointer" on:click={showInfo}
          ><InfoIcon
            size="30"
            class="text-light duration-300 hover:text-pagination"
          /></button
        >
        <button
          class="px-4 py-2 text-black cursor-pointer"
          on:click={addBookToReadingList}
          ><BookOpenIcon
            size="30"
            class="text-light duration-300 hover:text-pagination"
          /></button
        >
      </div>
    </div>
  {/if}
</li>
