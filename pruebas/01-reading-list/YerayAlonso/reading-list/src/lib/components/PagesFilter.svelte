<script>
  export let maxPagesSelected
  export let maxPagesBook
</script>

<div class="pt-4">
  <label for="max-pages">Max páginas: {maxPagesSelected}</label>
  <input type="range" id="max-pages" bind:value={maxPagesSelected} max={maxPagesBook} class="w-full" />
</div>
