<script>
  import BooksList from '$lib/components/BooksList.svelte'
  import GenreSelector from '$lib/components/GenreSelector.svelte'
  import PagesFilter from '$lib/components/PagesFilter.svelte'
  import { selectedBookIDs, books } from '$lib/utils/stores'

  /** @type {import('./$types').PageData} */
  export let data

  $books = data.books
  const { genres } = data
  let selectedGenres = genres

  let maxPagesBook = $books.map((b) => b.pages).reduce((a, b) => Math.max(a, b), 0)
  let maxPagesSelected = maxPagesBook

  let availableBookIDs

  $: {
    const booksInGenre = $books.filter((b) => selectedGenres.includes(b.genre))
    const booksInPages = booksInGenre.filter((b) => b.pages <= maxPagesSelected)

    const filteredBooks = booksInPages
    const filteredBookIDs = filteredBooks.map((b) => b.ISBN)
    availableBookIDs = filteredBookIDs.filter((id) => !$selectedBookIDs.some((sid) => sid === id))
  }

  const addBook = (book) => {
    $selectedBookIDs = [...$selectedBookIDs, book.ISBN]
  }

  const removeBook = (book) => {
    $selectedBookIDs = $selectedBookIDs.filter((b) => b !== book.ISBN)
  }

  const booksFromIDs = (ids) => $books.filter((b) => ids.includes(b.ISBN))

  // Subscribe to the 'storage' event to sync tabs
  const onStorage = (e) => {
    if (e.key === 'selectedBookISBNs') {
      $selectedBookIDs = e.newValue.split(',')
    }
  }
</script>

<svelte:window on:storage={onStorage} />

<div class="grid grid-cols-7 gap-10">
  <section>
    <h2 class="text-2xl pb-4">Filtros</h2>
    <GenreSelector {genres} bind:selectedGenres />
    <PagesFilter {maxPagesBook} bind:maxPagesSelected />
  </section>

  <section class="col-span-4">
    <BooksList books={booksFromIDs(availableBookIDs)} action={addBook} isSelected={false} />
  </section>

  <section class="col-span-2">
    <BooksList books={booksFromIDs($selectedBookIDs)} action={removeBook} isSelected={true} />
  </section>
</div>
