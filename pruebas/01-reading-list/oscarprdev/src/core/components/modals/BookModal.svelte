<script lang="ts">
  import { XIcon } from 'svelte-feather-icons'
  import { BookOpenIcon } from 'svelte-feather-icons'
  import { readingListUsecase } from '../../../features/reading-list'
  import { asideState } from '../../store/aside-store'
  import type { Book } from '../../types'
  import { actionsStore } from '../../store/actions-store'

  export let book: Book
  export let closeModal: () => void

  const addBookToReadingList = () => {
    readingListUsecase.addBook(book)

    asideState.update(() => ({
      readingListIsOpen: true,
      topBooksListIsOpen: false,
    }))

    actionsStore.update(() => ({
      readingListItemAdded: true,
      readingListItemRemoved: false,
    }))

    setTimeout(() => {
      actionsStore.update(() => {
        return {
          readingListItemAdded: false,
          readingListItemRemoved: false,
        }
      })
    }, 500)

    closeModal()
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
  <section class="h-80 w-2/5 shadow-[4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]">
    <img class="w-full h-full object-cover" src={book.cover} alt={book.title} />
  </section>
  <section class="relative w-1/2 h-80 flex flex-col gap-5 px-5">
    <div class="flex flex-col gap-3">
      <h2 class="text-lg"><b>{book.title}</b></h2>
      <h3 class="text-sm">
        <i>{book.author.name} - {book.year}</i>
      </h3>
      <span
        class="py-1.5 px-5 w-fit rounded-full bg-overlayModal text-sm text-light"
        >{book.genre}</span
      >
      <p>
        <span class=" text-3xl"><i>{book.synopsis[0]}</i></span><i
          >{book.synopsis.slice(1, book.synopsis.length)}.</i
        >
      </p>
    </div>
    <button
      class="absolute flex gap-4 bottom-0 px-6 py-3 rounded-3xl text-light bg-overlayModal cursor-pointer self-center hover:bg-nav duration-100"
      on:click={addBookToReadingList}
    >
      Añadir a lista de lectura
      <BookOpenIcon size="25" class="text-light" /></button
    >
  </section>
</article>
