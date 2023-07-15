<script lang="ts">
  import { stateUseCase } from '../store/store'
  import type { Book } from '../types'

  export let book: Book

  const removeBook = () => {
    stateUseCase.removeElement(book.ISBN)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
  class="flex flex-col gap-2 w-60 p-2 max-h-400 bg-bookItem shadow-lg"
  on:click={removeBook}
>
  <div class="h-5/6">
    <img class="w-full h-full object-cover" src={book.cover} alt={book.title} />
  </div>
  <div class="flex flex-col gap-2 max-w-xs p-3 overflow-hidden">
    <h2 class="text-xl font-bold truncate">{book.title}</h2>
    <h3 class="text-lg">{book.author.name}</h3>
  </div>
</li>
