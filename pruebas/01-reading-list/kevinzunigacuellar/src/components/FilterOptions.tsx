import { For } from "solid-js";
import {
  store,
  getMaxPages,
  getMinPages,
  getAllGenres,
  filterByGenre,
  filterByPages,
  filterBySearch,
} from "../scripts/store";

export function FilterOptions() {
  return (
    <form class="bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex flex-col gap-2">
      <label
        for="pages"
        class="uppercase font-bold tracking-wide text-sm text-zinc-300"
      >
        páginas
      </label>
      <div class="flex gap-2 items-center">
        <input
          id="pages"
          type="range"
          class="w-full h-2 bg-gray-100 rounded-lg"
          value={store.filters.pages}
          min={getMinPages()}
          max={getMaxPages()}
          onInput={(e) => {
            const pages = parseInt(e.currentTarget.value);
            filterByPages(pages);
          }}
        />
        <span class="font-mono flex-shrink-0 w-12 text-sm text-center bg-zinc-700 text-zinc-300 p-1 rounded-md">
          {store.filters.pages}
        </span>
      </div>
      <label
        for="genre"
        class="uppercase font-bold tracking-wide text-sm text-zinc-300"
      >
        género
      </label>
      <select
        id="genre"
        class="rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-300 my-1 py-1"
        onInput={(e) => {
          const genre = e.currentTarget.value;
          filterByGenre(genre);
        }}
      >
        <option value="todos">Todos</option>
        <For each={getAllGenres()}>
          {(genre) => (
            <option value={genre} selected={store.filters.genre === genre}>
              {genre}
            </option>
          )}
        </For>
      </select>
      <label
        for="search"
        class="uppercase font-bold tracking-wide text-sm text-zinc-300"
      >
        Buscar
      </label>
      <input
        id="search"
        value={store.filters.search}
        type="text"
        class="rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-300 mt-1 py-1"
        placeholder="Busca un libro"
        onInput={(e) => {
          const search = e.currentTarget.value;
          filterBySearch(search);
        }}
      />
    </form>
  );
}
