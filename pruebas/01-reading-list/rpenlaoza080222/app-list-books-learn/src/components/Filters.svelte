<script lang="ts">
  export let bookLength: number;
</script>

<div class="filters">
  <h2>Filtros</h2>
  <div class="filters-inputs">
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
</style>
