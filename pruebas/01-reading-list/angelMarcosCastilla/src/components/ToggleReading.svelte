<script lang="ts">
  export let id: string;
  import { booksStore } from "../store/books";

  const handleToggleFavorite = () => {
    booksStore.toggleFavorite(id);
  };
</script>

<button
  on:click={handleToggleFavorite}
  class="absolute top-2 right-2 w-10 h-10 flex hover:shadow-lg hover:bg-orange-600
  items-center justify-center text-white bg-orange-500 rounded-full"
>
  {#if $booksStore.favorites.includes(id)}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><circle cx="12" cy="12" r="10" /><polyline
        points="12 8 8 12 12 16"
      /><line x1="16" y1="12" x2="8" y2="12" /></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      class="w-6 h-6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path
        d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      /></svg
    >
  {/if}
</button>
