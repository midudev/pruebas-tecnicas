<script lang="ts">
  import type { Book } from '../types'
  import BookItem from './BookItem.svelte'
  import type { Readable } from 'svelte/motion'

  export let booksList: Readable<Book[]>
</script>

<ul class="flex flex-wrap gap-5 p-5">
  {#each $booksList as book}
    <BookItem {book} />
  {/each}
</ul>
