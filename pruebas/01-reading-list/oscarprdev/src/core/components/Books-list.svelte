<script lang="ts">
    import { appState } from '../store/store'
    import BookItem from './BookItem.svelte'
</script>

<ul class="flex flex-wrap gap-5 w-full h-full p-5">
  {#each $appState.books as book}
    <BookItem {book}/>
  {/each}
</ul>