<script lang="ts">
  import { page } from '$app/stores'
  import { getBooks } from '$lib/services/books'
  import BookCard from '$lib/components/bookCard.svelte'
  $: queriesEntries = new URLSearchParams($page.url.search)
  $: queries = Object.fromEntries(queriesEntries) as { q: string, by: string }
</script>

{#await getBooks({ queries })}
  <p>Loading ...</p>
{:then { books }}
  <div
    class="grid xs:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 my-4"
  >
    {#if books && books?.length > 0}
      {#each books as { book }}
        <BookCard
          book={{
            id: book.ISBN,
            title: book.title,
            author: book.author.name,
            cover: book.cover,
            genre: book.genre,
            pages: book.pages
          }}
        />
      {/each}
    {:else}
    <div class="min-h-[40vh] grid place-content-center">
      <p>No se encontraron resultados...</p>
    </div>
    {/if}
  </div>
{/await}

<!-- <KeyWrite /> -->
