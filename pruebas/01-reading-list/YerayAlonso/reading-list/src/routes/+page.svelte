<script>
  import BooksList from '$lib/components/BooksList.svelte'
  import GenreSelector from '$lib/components/GenreSelector.svelte'
  import { selectedBookIDs, books } from '$lib/utils/stores'

  /** @type {import('./$types').PageData} */
  export let data

  $books = data.books
  const { genres } = data
  let selectedGenres = genres

  $: bookIDsInGenre = $books.filter((b) => selectedGenres.includes(b.genre)).map((b) => b.ISBN)
  $: filteredBookIDs = bookIDsInGenre.filter((id) => !$selectedBookIDs.some((sid) => sid === id))

  const addBook = (book) => {
    $selectedBookIDs = [...$selectedBookIDs, book.ISBN]
  }

  const removeBook = (book) => {
    $selectedBookIDs = $selectedBookIDs.filter((b) => b !== book.ISBN)
  }

  const toggleSelectedGenre = (genre) => {
    selectedGenres.includes(genre) ? (selectedGenres = selectedGenres.filter((g) => g !== genre)) : selectedGenres.push(genre)
    selectedGenres = selectedGenres //force reactivity
  }

  const booksFromIDs = (ids) => $books.filter((b) => ids.includes(b.ISBN))

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
    <GenreSelector {genres} {selectedGenres} action={toggleSelectedGenre} />
  </section>

  <section class="col-span-4">
    <BooksList books={booksFromIDs(filteredBookIDs)} action={addBook} isSelected={false} />
  </section>

  <section class="col-span-2">
    <BooksList books={booksFromIDs($selectedBookIDs)} action={removeBook} isSelected={true} />
  </section>
</div>
