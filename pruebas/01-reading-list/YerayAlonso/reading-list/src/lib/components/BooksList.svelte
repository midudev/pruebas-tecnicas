<script>
  import Book from '$lib/components/Book.svelte'

  export let books
  export let action
</script>

<ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
  {#each books as { book }}
    <li class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
      <button class="group relative" on:click={() => action(book)}>
        <Book {book} isSelected={false} />
      </button>
    </li>
  {/each}
</ul>
