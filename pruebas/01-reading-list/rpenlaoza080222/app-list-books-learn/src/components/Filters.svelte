<script lang="ts">
  export let bookLength: number;
  export let searchText: string;
  export let filterBooks: Function
  let open = false;
</script>

<div class="filters">
  <h2>Filtros</h2>
  <div class="filters-inputs">
    <div style="display: flex;aligm-items:center">
      <input type="text" class="search-input" class:open={open} bind:value={searchText} />
      <button on:click={() => {
        filterBooks(searchText)
        open = !open
      }}>Buscar</button>
    </div>

    <p class="book-number">{bookLength} libros</p>
  </div>
</div>

<style>
  h2 {
    margin: 0;
  }
  .book-number {
    text-transform: uppercase;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filters-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .search-input {
    height: 20px;
    width: 0;
    transition: width ease-in-out 0.7s;
    border: 0;
    outline: 0;
    padding: 8px;
    border-radius: 12px;
  }

  .search-input.open {
    width: 200px;
    border: 1px solid #1c1b1b;
    outline: 0;
  }
</style>
