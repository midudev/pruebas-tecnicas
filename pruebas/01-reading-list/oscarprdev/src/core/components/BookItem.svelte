<script lang="ts">
    import { stateUseCase } from "../state"
    import type { Book } from "../types"

    export let book: Book;

    const removeBook = () => {
      stateUseCase.removeElement(book.ISBN)
    }
</script>

<li class="flex flex-col gap-2 basis-80 p-2" on:click={removeBook} >
  <div class="h-5/6">
    <img class="w-full h-full object-cover" src={book.cover} alt={book.title}/>
  </div>
  <div class="flex flex-col gap-2 max-w-xs p-3 overflow-hidden">
    <h2 class="text-xl font-bold truncate">{book.title}</h2>
    <h3 class="text-lg">{book.author.name}</h3>
  </div>
</li>