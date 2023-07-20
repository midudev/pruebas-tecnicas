<script>
  import BooksList from '$lib/components/BooksList.svelte'
  import { selectedBooks, library } from '$lib/utils/stores'

  /** @type {import('./$types').PageData} */
  export let data

  $library = data.library

  const addBook = (book) => {
    $selectedBooks = [...$selectedBooks, { book }]
  }

  const removeBook = (book) => {
    $selectedBooks = $selectedBooks.filter((b) => b.book !== book)
  }
</script>

<div class="grid grid-cols-3 gap-10">
  <section class="col-span-2">
    <h2 class="text-2xl pb-4">Libros disponibles</h2>
    <BooksList books={$library.filter((b) => !$selectedBooks.some((sb) => sb.book === b.book))} action={addBook} isSelected={false} />
  </section>

  <section>
    <h2 class="text-2xl pb-4">Libros seleccionados</h2>
    <BooksList books={$selectedBooks} action={removeBook} isSelected={true} />
  </section>
</div>
