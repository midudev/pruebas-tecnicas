<script lang="ts">
  import { modalState } from '../store/modal-store'
  import { XIcon } from 'svelte-feather-icons'
  import { BookOpenIcon } from 'svelte-feather-icons'

  const closeModal = () => {
    modalState.update((state) => ({ isOpen: false, book: null }))
  }
</script>

{#if $modalState.isOpen}
  <dialog
    open={$modalState.isOpen}
    data-modal-target="modal"
    class="absolute top-0 left-0 bg-dark backdrop-blur-sm w-full h-full grid place-items-center z-1 open:animate-fade-in open:backdrop:animate-fade-in"
  >
    <article
      class="flex items-start justify-center gap-8 p-8 bg-light max-w-xl max-h-800 rounded-sm relative"
    >
      <button
        class="absolute top-3 right-3 z-10 cursor-pointer"
        on:click={closeModal}
      >
        <XIcon size="24" />
      </button>
      <section class="h-80 shadow-[4.0px_5.0px_8.0px_rgba(0,0,0,0.38)]">
        <img
          class="w-full h-full object-cover"
          src={$modalState.book.cover}
          alt={$modalState.book.title}
        />
      </section>
      <section class="relative w-1/2 h-80 flex flex-col gap-5 p-5">
        <div class="flex flex-col gap-3">
          <h2 class="text-lg"><b>{$modalState.book.title}</b></h2>
          <h3 class="text-sm">
            <i>{$modalState.book.author.name} - {$modalState.book.year}</i>
          </h3>
          <span
            class="py-1.5 px-5 w-fit rounded-full bg-overlayModal text-sm text-light"
            >{$modalState.book.genre}</span
          >
          <p><i>{$modalState.book.synopsis}.</i></p>
        </div>
        <button
          class="absolute flex gap-4 bottom-3 px-6 py-3 rounded-3xl text-light bg-overlayModal cursor-pointer self-center hover:bg-nav duration-300"
        >
          Añadir a lista de lectura
          <BookOpenIcon size="25" class="text-light" /></button
        >
      </section>
    </article>
  </dialog>
{/if}
