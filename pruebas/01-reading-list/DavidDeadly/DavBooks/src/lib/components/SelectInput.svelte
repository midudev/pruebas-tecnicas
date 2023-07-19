<script lang="ts">
  import { booksStore } from '$lib';
  import { NO_GENRES_FILTER } from '$lib/constants';

  export let value: string;
  export let id: string;
</script>

<span>Filtrar por géneros</span>

<select {id} bind:value>
  <option value={NO_GENRES_FILTER}>{NO_GENRES_FILTER}</option>

  {#each $booksStore.genres as genre}
    <option value={genre}>
      {genre}
    </option>
  {/each}
</select>

<style>
  select {
    padding: 10px;
    border-radius: 15px;
  }
</style>
