import {
  store,
  removeFromReadingList,
  IncreaseIdxReadingList,
  DecreaeIdxReadingList,
} from "../scripts/store";
import { For, Show } from "solid-js";

export function ReadingList() {
  return (
    <section class="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
      <div class="flex justify-between uppercase font-bold text-zinc-200 text-sm">
        <h2 class="tracking-wide">Lista de lectura</h2>
        <span class="font-mono bg-zinc-600 px-1.5 py-0.5 rounded-md">
          {store.readingList.length}
        </span>
      </div>
      <ul class="grid grid-cols-1 gap-2 mt-2">
        <For each={store.readingList} fallback={<EmptyPlaceHolder />}>
          {(book, i) => (
            <li class="bg-zinc-600 rounded-md p-1.5 flex justify-between items-center gap-2">
              <div class="grid grid-cols-1">
                <Show when={i() > 0}>
                  <button
                    class="hover:bg-zinc-500 rounded-sm"
                    onClick={() => IncreaseIdxReadingList(i())}
                  >
                    <Up />
                  </button>
                </Show>
                <Show when={i() < store.readingList.length - 1}>
                  <button
                    class="hover:bg-zinc-500 rounded-sm"
                    onClick={() => DecreaeIdxReadingList(i())}
                  >
                    <Down />
                  </button>
                </Show>
              </div>
              <h2 class="text-xs">{book.title}</h2>
              <button
                onClick={() => removeFromReadingList(book.ISBN)}
                class="hover:bg-red-300 rounded-sm hover:text-red-800 p-0.5"
              >
                <TrashIcon />
              </button>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

function EmptyPlaceHolder() {
  return <li class="text-zinc-400 py-1">No hay libros 😭</li>;
}

function Up() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

function Down() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}
