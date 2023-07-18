<script lang="ts">
  import { booksStore } from "../store/books";
  import Books from "./Books.svelte";
  let openModal = false;

  const handleToggleModal = () => {
    openModal = !openModal;
  };

  $: {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  $: listFavorites = $booksStore.books.filter((book) =>
    $booksStore.favorites.includes(book.ISBN)
  );
  $: total = listFavorites.length;
</script>

<button
  aria-label="Abrir modal de lecturas "
  on:click={handleToggleModal}
  class="relative w-10 h-10 hover:opacity-90"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    ><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg
  >
  <span
    class="absolute w-5 h-5 rounded-full grid place-content-center top-0 text-xs right-2 bg-blue-800"
  >
    {total}
  </span>
</button>
{#if openModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <aside
    on:click={handleToggleModal}
    class="fixed bg-black/60 backdrop-blur z-30 top-0 left-0 right-0 bottom-0"
  >
    <div
      on:click|stopPropagation
      class="bg-black w-[400px]
      absolute top-0 bottom-0 right-0 overflow-y-auto border-l border-white px-9"
    >
      <div>
        <h2 class="text-2xl flex justify-center mb-4 py-2">
          lecturas <span
            class=" w-5 h-5 rounded-full grid place-content-center text-xs bg-blue-800"
            >{total}</span
          >
        </h2>
        <div class="flex flex-col gap-3">
          {#each listFavorites as book}
            <Books {book} />
          {:else}
            <p>No hay libros favoritos</p>
          {/each}
        </div>
      </div>
    </div>
  </aside>
{/if}
