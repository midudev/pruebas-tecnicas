<script>
  import Book from '$lib/components/Book.svelte'

  export let books
  export let action
  export let isSelected

  let title
  $: {
    const isPlural = books.length !== 1
    const booksTitle = `libro${isPlural ? 's' : ''}`
    const avaliableTitle = `disponible${isPlural ? 's' : ''}`
    const selectedTitle = `seleccionado${isPlural ? 's' : ''}`
    title = `${books.length} ${booksTitle} ${isSelected ? selectedTitle : avaliableTitle}`
  }
</script>

<h2 class="text-2xl pb-4">{title}</h2>
{#if books.length > 0}
  <ul class="grid grid-cols-2 md:grid-cols-4 gap-3">
    {#each books as book}
      <li class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
        <button class="group relative" on:click={() => action(book)}>
          <Book {book} {isSelected} />
        </button>
      </li>
    {/each}
  </ul>
{:else}
  <div>No hay libros en ésta lista</div>
{/if}
