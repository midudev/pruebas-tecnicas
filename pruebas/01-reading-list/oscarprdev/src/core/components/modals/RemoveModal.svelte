<script lang="ts">
  import { appState } from '../../store/app-state-store'
  import { readingListUsecase } from '../../../features/reading-list'
  import { XIcon } from 'svelte-feather-icons'
  import { asideState } from '../../store/aside-store.js'
  import type { Book } from '../../types'
  import { paginationState } from '../../store/pagination-store'
  import { actionsStore } from '../../store/actions-store'

  export let book: Book
  export let closeModal: () => void

  const removeBookFromReadingList = () => {
    readingListUsecase.removeBook(book)
    closeModal()

    if ($appState.readingBooks.length === 0) {
      asideState.update(() => ({
        readingListIsOpen: false,
        topBooksListIsOpen: false,
      }))
    }

    paginationState.update(() => ({
      init: 0,
      offset: 4,
    }))

    actionsStore.update(() => ({
      readingListItemAdded: false,
      readingListItemRemoved: true,
    }))

    setTimeout(() => {
      actionsStore.update(() => ({
        readingListItemAdded: false,
        readingListItemRemoved: false,
      }))
    }, 500)
  }
</script>

<article
  class="flex items-start justify-center gap-8 p-8 bg-light max-w-xl max-h-900 rounded-sm relative"
>
  <button
    class="absolute top-3 right-3 z-10 cursor-pointer hover:text-pagination duration-100"
    on:click={closeModal}
  >
    <XIcon size="24" />
  </button>
  <section class="flex flex-col gap-5 px-10">
    <h3>
      ¿Estas seguro que quieres borrar <b><i>{book.title}</i></b>
      de la lista de lectura?
      <span class=" text-pagination"><b>¡Perderas todo tu progreso! 😱</b></span
      >
    </h3>
    <button
      class="self-center px-7 py-3 w-fit rounded-3xl text-light bg-overlayModal cursor-pointer hover:bg-nav duration-100"
      on:click={removeBookFromReadingList}>Borrar de la lista de lectura</button
    >
  </section>
</article>
