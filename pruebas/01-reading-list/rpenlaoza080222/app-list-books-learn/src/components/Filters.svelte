<script lang="ts">
  export let bookLength: number;
  export let searchText: string;
  export let genres: Set<any>;
  export let genre: string;
  export let filterBooks: Function
  let open = false;

  function changeSearchText(event:any){
    searchText = event.target?.value;
    filterBooks(searchText, genre);
  }

  function changeGenre(event:any){
    genre = event.target?.value;
    filterBooks(searchText, genre);
  }
</script>

<div class="filters">
  <h2>Filtros</h2>
  <div class="filters-inputs">
    <div style="display: flex;aligm-items:center;gap:20px">
      <input type="text" class="search-input" bind:value={searchText} on:keyup={changeSearchText} />
      <div style="display: flex;flex-direction:column; ">
        <label for="genres">Género</label>
        <select id="" bind:value={genre} on:change={changeGenre}>
          <option value="">Todos</option>
          {#each genres as genreText}
            <option value={genreText}>{genreText}</option>
          {/each}
        </select>
      </div>
      
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
    width: 200px;
    border: 1px solid #1c1b1b;
    outline: 0;
  }

</style>
