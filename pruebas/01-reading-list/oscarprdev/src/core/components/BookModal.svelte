<script lang="ts">
  import { modalState } from '../store/modal-store'

  const closeModal = () => {
    modalState.update((state) => ({ isOpen: false, book: null }))
  }
</script>

{#if $modalState.isOpen}
  <dialog
    open
    data-modal-target="modal"
    class="absolute top-0 left-0 bg-dark backdrop-blur-sm w-full h-full grid place-items-center z-1 open:animate-fade-in open:backdrop:animate-fade-in"
  >
    <div
      class="flex items-start justify-center gap-8 p-5 bg-light max-w-xl max-h-400 rounded-md relative"
    >
      <button
        class="absolute top-3 right-3 px-4 py-2 bg-blue-500 text-white rounded-md"
        on:click={closeModal}
      >
        X
      </button>
      <section class="h-80">
        <img
          class="w-full h-full object-cover"
          src={$modalState.book.cover}
          alt={$modalState.book.title}
        />
      </section>
      <section class="w-1/2 h-80 flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h2 class="text-lg"><b>{$modalState.book.title}</b></h2>
          <h3 class="text-sm">
            <i>{$modalState.book.author.name} - {$modalState.book.year}</i>
          </h3>
          <p>{$modalState.book.synopsis}</p>
        </div>
        <div class="flex flex-col gap-1">
          <button
            class="border border-black px-5 py-2 cursor-pointer hover:bg-pagBtn transition-colors ease-in"
            >Add fav</button
          >
        </div>
      </section>
    </div>
  </dialog>
{/if}
