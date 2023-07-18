<script lang="ts">
  import { modalState } from '../store/modal-store'
  import { XIcon } from 'svelte-feather-icons'
  import { BookOpenIcon } from 'svelte-feather-icons'
  import { readingListUsecase } from '../../features/reading-list'
  import { asideState } from '../store/aside-store'

  const closeModal = () => {
    modalState.update((prev) => ({
      ...prev,
      removeModal: { isOpen: false, book: null },
    }))
  }
</script>

{#if $modalState.removeModal.isOpen}
  <dialog
    open={$modalState.removeModal.isOpen}
    data-modal-target="modal"
    class="absolute top-0 left-0 bg-dark backdrop-blur-sm w-full h-full grid place-items-center z-1 open:animate-fade-in open:backdrop:animate-fade-in"
  >
    <article
      class="flex items-start justify-center gap-8 p-8 bg-light max-w-xl max-h-900 rounded-sm relative"
    >
      <button
        class="absolute top-3 right-3 z-10 cursor-pointer"
        on:click={closeModal}
      >
        <XIcon size="24" />
      </button>
      <section class="flex flex-col gap-5 px-10">
        <h3>
          ¿Estas seguro que quieres borrar <b
            ><i>{$modalState.removeModal.book.title}</i></b
          >
          de la lista de lectura?
          <span class=" text-pagination"
            ><b>¡Perderas todo el progreso!</b></span
          >
        </h3>
        <button
          class="self-center px-7 py-3 w-fit rounded-3xl text-light bg-overlayModal cursor-pointer hover:bg-nav duration-100"
          >Borrar de la lista de lectura</button
        >
      </section>
    </article>
  </dialog>
{/if}
