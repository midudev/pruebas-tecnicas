<script>
  /** @type {import('./$types').PageData} */
  export let data

  const { library } = data
</script>

<ul class="grid grid-cols-2 md:grid-cols-3 gap-3">
  {#each library as { book }}
    <li class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl">
      <img
        class="aspect-[329/499] h-full w-full object-cover max-w-full rounded"
        src={book.cover}
        alt="Portada del libro {book.title}"
      />
    </li>
  {/each}
</ul>
