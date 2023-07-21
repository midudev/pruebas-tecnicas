<script lang="ts">
  import { setBookwishList, getBookWishList } from "$lib/contexts/booksContext";
  export let bookLength: number;
  export let searchText: string;
  export let genres: Set<any>;
  export let genre: string;
  export let filterBooks: Function;
  export let toggleSideBar: Function;

  export let open = false;

  const wishListBooks = getBookWishList();

  function changeSearchText(event: any) {
    searchText = event.target?.value;
    filterBooks(searchText, genre);
  }

  function changeGenre(event: any) {
    genre = event.target?.value;
    filterBooks(searchText, genre);
  }
</script>

<div class="filters mb-4 bg-gray-900 ">
  <h2 class="text-lg text-white font-semibold">Filtros</h2>
  <div class="filters-inputs">
    <div style="display: flex;align-items:center;gap:20px">
      <p class="book-number text-white">{bookLength} libros</p>
      <input
        type="text"
        class="bg-gray-700 text-lg border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Buscar..."
        bind:value={searchText}
        on:keyup={changeSearchText}
      />
      <label for="genres" class="text-white">Género</label>
      <select id="genres" bind:value={genre} on:change={changeGenre} class="bg-gray-700 text-lg  border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" class="text-white">Todos</option>
        {#each genres as genreText}
          <option value={genreText} class="text-white">{genreText}</option>
        {/each}
      </select>
    </div>
    <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    data-drawer-target="drawer-example"
    data-drawer-show="drawer-example"
    aria-controls="drawer-example"
    on:click={() => {
      toggleSideBar()
    }}
    >
      <span class="relative px-5 py-2.5 text-white transition-all ease-in duration-75 bg-gray-700  dark:bg-white rounded-md group-hover:bg-opacity-0">
        {$wishListBooks?.length} libros para leer
      </span>
    </button>
   
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
