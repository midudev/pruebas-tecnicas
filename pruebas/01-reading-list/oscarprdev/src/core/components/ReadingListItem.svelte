<script lang="ts">
  import { modalState } from '../store/modal-store'
  import type { Book } from '../types'
  import { DeleteIcon, XCircleIcon } from 'svelte-feather-icons'

  export let book: Book

  const openRemoveModal = () => {
    modalState.update((prev) => ({
      ...prev,
      removeModal: {
        isOpen: true,
        book,
      },
    }))
  }
</script>

<article class=" relative flex w-full gap-3 h-64 my-2 p-2">
  <div class="w-2/6 h-full shadow-[-4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]">
    <img class="w-full h-full" src={book.cover} alt={book.title} />
  </div>
  <section class="flex flex-col gap-2">
    <h3 class="text-lg">{book.title}</h3>
    <h4 class="text-sm"><i>{book.author.name}</i></h4>
    <span
      class="py-1.5 px-4 text-sm w-fit rounded-full bg-overlayModal text-light"
      >{book.genre}</span
    >
  </section>
  <button class="absolute top-0 left-0" on:click={openRemoveModal}>
    <XCircleIcon
      size="30"
      class="fill-dark text-icons duration-300 hover:text-pagination"
    />
  </button>
</article>
