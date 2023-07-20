<script>
  import BooksList from '$lib/components/BooksList.svelte'
  import GenreSelector from '$lib/components/GenreSelector.svelte'
  import { selectedBooks, books } from '$lib/utils/stores'

  /** @type {import('./$types').PageData} */
  export let data

  $books = data.books
  const { genres } = data
  let selectedGenres = genres

  $: booksInGenre = $books.filter((b) => selectedGenres.includes(b.genre))
  $: filteredBooks = booksInGenre.filter((b) => !$selectedBooks.some((sb) => sb === b))

  const addBook = (book) => {
    $selectedBooks = [...$selectedBooks, book]
  }

  const removeBook = (book) => {
    $selectedBooks = $selectedBooks.filter((b) => b !== book)
  }

  const toggleSelectedGenre = (genre) => {
    selectedGenres.includes(genre) ? (selectedGenres = selectedGenres.filter((g) => g !== genre)) : selectedGenres.push(genre)
    selectedGenres = selectedGenres //force reactivity
  }
</script>

<div class="grid grid-cols-7 gap-10">
  <section>
    <h2 class="text-2xl pb-4">Filtros</h2>
    <GenreSelector {genres} {selectedGenres} action={toggleSelectedGenre} />
  </section>

  <section class="col-span-4">
    <h2 class="text-2xl pb-4">{filteredBooks.length} libros disponibles</h2>
    <BooksList books={filteredBooks} action={addBook} isSelected={false} />
  </section>

  <section class="col-span-2">
    <h2 class="text-2xl pb-4">{$selectedBooks.length} libros seleccionados</h2>
    <BooksList books={$selectedBooks} action={removeBook} isSelected={true} />
  </section>
</div>
