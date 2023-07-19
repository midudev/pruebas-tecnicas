<script lang="ts">
  import { booksStore } from '$lib';

  export let value: number;
  export let id: string;
</script>

<span>Filtrar por páginas</span>

<input
  {id}
  type="range"
  min={$booksStore.min}
  max={$booksStore.max}
  bind:value
/>

<div class="ranges">
  <span>{$booksStore.min}</span>
  <span>{value}</span>
</div>

<style>
  .ranges {
    display: flex;
    justify-content: space-between;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
  }
</style>
