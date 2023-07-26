import { For, Show } from "solid-js";
import {
  store,
  addToReadingList,
  getRemainingBookCount,
} from "../scripts/store";

export function BookShowcase() {
  return (
    <section class="flex-1 bg-zinc-800 p-6 rounded-lg border border-zinc-700">
      <p class="text-lg pb-4 font-semibold tracking-wide text-zinc-300">
        Libros disponibles{" "}
        <span class="px-1.5 font-mono py-1 rounded-md bg-zinc-700 text-sm">
          {getRemainingBookCount()}
        </span>
      </p>
      <Show
        when={store.showcaseBooks.length > 0}
        fallback={<ShowcaseFallback />}
      >
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <For each={store.showcaseBooks}>
            {(book) => (
              <li class="relative rounded-md overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  class="h-full w-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 hover:bg-white/40 hover:backdrop-blur transition-opacity flex justify-center items-center flex-col p-2 text-center opacity-0 hover:opacity-100">
                  <h2 class="font-bold">{book.title}</h2>
                  <button
                    class="bg-blue-700 text-white uppercase text-sm font-bold px-2 py-1 mt-2 rounded-md"
                    onClick={() => addToReadingList(book)}
                  >
                    Agregar
                  </button>
                </div>
              </li>
            )}
          </For>
        </ul>
      </Show>
    </section>
  );
}

function ShowcaseFallback() {
  return (
    <p class="py-10 text-center font-semibold rounded-md text-zinc-300 border bg-zinc-900 border-zinc-700">
      No se encontró ningun libro 😭, prueba cambiando los filtros
    </p>
  );
}
