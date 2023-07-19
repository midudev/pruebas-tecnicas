<script lang="ts">
  import { appState } from '../store/app-state-store'
  import BooksList from './Books-list.svelte'
  import { writable } from 'svelte/store'
  import type { BooksFilters, PaginationState } from './types'
  import { usePagination } from './hooks/usePagination'
  import { useFilter } from './hooks/useFilter'
  import FilterBooks from './FilterBooks.svelte'

  const INITIAL_FILTERS_STATE = {
    genre: '',
    title: '',
    pages: 1200,
  }
  const filters = writable<BooksFilters>(INITIAL_FILTERS_STATE)
  const paginationState = writable<PaginationState>({ init: 0, offset: 4 })

  const booksFiltered = useFilter(filters)
  const booksList = usePagination(booksFiltered, paginationState)
</script>

<section class="bg-light h-full p-10">
  <h1 class="text-4xl"><i>Biblioteca</i></h1>
  <div class="pt-5">
    <h2>Disponibles: {$appState.books.length}</h2>
    <h3>En lista de lectura: {$appState.readingBooks.length}</h3>
  </div>
  <FilterBooks {filters} {paginationState} />
  <BooksList {booksList} {paginationState} {booksFiltered} />
</section>
