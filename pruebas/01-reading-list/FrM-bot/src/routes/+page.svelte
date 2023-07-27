<script lang="ts">
  import Card from '$lib/components/card.svelte'
  import type { PageData } from './$types'
  import Button from '$lib/components/button.svelte'
  import BookCard from '$lib/components/bookCard.svelte'
  import { getBooks } from '$lib/services/books'

  export let data: PageData

  const { genres } = data

  // let listOfBooks = [...data.books] as unknown as Library[]

  let { books } = data

  const Pages = {
    max: 1000,
    min: 0
  }

  let filters = {
    minPages: Pages.min,
    maxPages: Pages.max,
    genre: ''
  }

  function handlerChangeGenre(
    event: Event & {
      currentTarget: EventTarget & HTMLSelectElement
    }
  ) {
    const { value } = event.currentTarget
    filters.genre = value
  }

  function handlerApplyFilters(
    event: Event & {
      readonly submitter: HTMLElement | null
    } & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) {
    filters.maxPages ??= Pages.max
    filters.minPages ??= Pages.min

    if (filters.maxPages < filters.minPages) {
      return alert('Ingresea un valor válido')
    }

    if (filters.maxPages > 1000) {
      return alert('Ingresea un valor válido')
    }

    if (filters.minPages < 0) {
      return alert('Ingresea un valor válido')
    }

    getBooks({ queries: filters })
      .then((data) => {
        books = data?.books || []
      })
      .catch(console.error)
  }
</script>

<svelte:head>
  <title>Bookie</title>
</svelte:head>

<h2
  class="bg-gradient-to-r from-dark-v1 to-transparent p-2 rounded text-lg border-l border-l-secondary"
>
  <span class="bg-tertiary p-1 rounded-sm">{books?.length}</span>. Libros disponibles
</h2>

<form
  on:submit|preventDefault={handlerApplyFilters}
  class="flex gap-2 flex-wrap my-4 bg-gradient-to-r from-dark-v1 to-transparent rounded border-l border-primary p-2"
>
  <div class="flex flex-col gap-2">
    <Card class="w-fit">
      <span class="px-2">Filtrar por página</span>
    </Card>
    <Card tag="label" class="flex items-center relative w-80 py-3">
      <input
        class="absolute w-[calc(100%-16px)] left-2"
        type="range"
        name="minPages"
        min={Pages.min}
        id="minPages"
        max={Pages.max}
        step="1"
        bind:value={filters.minPages}
      />
      <input
        class="absolute w-[calc(100%-16px)] left-2"
        type="range"
        name="maxPages"
        min={Pages.min}
        max={Pages.max}
        id="maxPages"
        step="1"
        bind:value={filters.maxPages}
      />
    </Card>
    <div class="grid grid-cols-2 gap-2">
      <Card tag="label" class="dark:border-l-primary">
        <input
          class="bg-transparent outline-none w-36 focus:text-primary"
          type="number"
          min={Pages.min}
          placeholder="Páginas máximas"
          name="minPages"
          bind:value={filters.minPages}
        />
      </Card>
      <Card tag="label" class="dark:border-r-secondary">
        <input
          class="bg-transparent outline-none w-36 focus:text-secondary"
          type="number"
          min={Pages.min}
          max={Pages.max}
          placeholder="Páginas mínimas"
          name="maxPages"
          bind:value={filters.maxPages}
        />
      </Card>
    </div>
    <!-- <button>Filtrar</button> -->
  </div>

  <div class="flex flex-col gap-2">
    <Card class="w-fit">
      <span class="px-2">Filtrar por género</span>
    </Card>
    <Card class="w-fit">
      <select on:change={handlerChangeGenre} class="bg-dark-v1 outline-none" name="genre">
        <option value="" selected>Todos</option>
        {#each genres as genre}
          <option>{genre}</option>
        {/each}
      </select>
    </Card>
  </div>
  <div>
    <Button variant="gradient">Aplicar filtros</Button>
  </div>
</form>

<section
  class="grid xs:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4 my-4"
>
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
</section>
