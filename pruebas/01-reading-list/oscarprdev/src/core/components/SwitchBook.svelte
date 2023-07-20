<script lang="ts">
  import { CheckCircleIcon, CircleIcon, LoaderIcon } from 'svelte-feather-icons'
  import { readingListItemUsecase } from '../../features/reading-list-item'
  import type { Book } from '../types'
  import { onMount } from 'svelte'

  export let book: Book
  let isDone = false

  const toggleStatus = () => {
    isDone = !isDone
    readingListItemUsecase.toggleBookIsDone(book, isDone)
  }

  onMount(() => {
    isDone = book.isDone
  })
</script>

<label class="flex items-center">
  <input
    type="checkbox"
    checked={isDone}
    on:change={toggleStatus}
    class="hidden"
  />
  <span
    class="cursor-pointer relative inline-block w-16 h-10 rounded-full transition-colors duration-300 ease-in-out {isDone
      ? 'bg-doneLight'
      : 'bg-switch'}"
  >
    <span
      class="absolute grid place-items-center top-1 left-1 w-8 h-8 rounded-full shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out {isDone
        ? 'translate-x-6 bg-done'
        : 'bg-light'}"
    >
      {#if isDone}
        <CheckCircleIcon size="23" class="text-light text-center" />
      {/if}
    </span>
  </span>
  <span class="ml-3 font-medium {isDone ? 'text-done' : ''}"
    >{isDone ? 'Completado!' : 'Leyendo.. '}</span
  >
</label>
