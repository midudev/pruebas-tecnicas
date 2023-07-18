<script lang="ts">
  import type { booksAdapter } from "../adapters/booksAdapter";
  import { booksStore } from "../store/books";
  import ListReadingBooks from "./ListReadingBooks.svelte";

  let filtersValues = {
    title: "",
    genre: "",
  };

  // obtenemos los generos de los libros
  $: genresData = [...new Set($booksStore.books.map((book) => book.genre))];

  $: if ($booksStore.books.length > 0) {
    {
      // vemos los filtros que se aplicaran, los que tienen valor
      const filtersToApply = Object.entries(filtersValues).filter(
        ([_, value]) => Boolean(value)
      );

      if (filtersToApply.length === 0) {
        booksStore.setFilteredBooks($booksStore.books);
      } else {
        const filteredBooks = $booksStore.books.filter((book) => {
          return filtersToApply.every(([key, value]) => {
            return book[key].toLowerCase().includes(value.toLowerCase());
          });
        });
        console.log(filteredBooks, "filteredBooks");
        booksStore.setFilteredBooks(filteredBooks);
      }
    }
  }

  $: totalDisponible = $booksStore.books.length - $booksStore.favorites.length;

  // Disponible por genero
  $: totalDisponibleGenero = $booksStore.books.filter((book) => {
    return (
      book.genre === filtersValues.genre &&
      !$booksStore.favorites.includes(book.ISBN)
    );
  }).length;
</script>

<nav class="py-4 mb-2 flex gap-2 justify-between items-center">
  <div class="flex items-center gap-8">
    <input
      class="bg-transparent py-1.5 px-4 border rounded-md border-white"
      type="text"
      placeholder="Buscar libros"
      bind:value={filtersValues.title}
    />
    <div class="relative">
      <select
        class="bg-black py-1.5 px-4 border rounded-md border-white"
        id=""
        bind:value={filtersValues.genre}
        placeholder="filtrar por genero"
      >
        <option value="">Todos los generos</option>
        {#each genresData as genre}
          <option value={genre}>{genre}</option>
        {/each}
      </select>
      {#if filtersValues.genre !== ""}
        <span class="bg-purple-800 text-purple-50-50 text-sm py-1 px-2 rounded-full">
          {totalDisponibleGenero}
        </span>
      {/if}
    </div>
  </div>
  <div class="flex flex-row items-center gap-2">
    <span class="bg-green-800 text-green-50 text-sm py-1 px-2 rounded-md"
      >Total Dispible: {totalDisponible}</span
    >
    <ListReadingBooks />
  </div>
</nav>
