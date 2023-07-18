<script lang="ts">
  import type { BooksAdater } from "../types/books";
  import ToggleReading from "./ToggleReading.svelte";

  export let book: BooksAdater;
</script>

<article class="relative h-[380px] w-full border border-white">
  <img
    src={book.cover}
    alt={`cover of ${book.title}`}
    class="w-full h-full object-cover"
  />
  <ToggleReading id={book.ISBN} />
  <span
    class="absolute top-2 left-2 bg-blue-800 text-blue-50 text-sm font-medium mr-2 px-2.5 py-1 rounded"
    >{book.genre}</span
  >
  <div
    class="absolute w-full bottom-0 p-4 text-center h-28 bg-gradient-to-b from-black/40 backdrop-blur-sm to-black"
  >
    <h2 class="font-bold mb-1">{book.title}</h2>
    <p class="text-left text-sm overflow-hidden text-ellipsis line-clamp-2">
      {book.synopsis}
    </p>
  </div>
</article>
