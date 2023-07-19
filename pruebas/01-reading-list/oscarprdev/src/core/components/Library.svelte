<script lang="ts">
  import { appState } from '../store/app-state-store'
  import BooksList from './Books-list.svelte'
  import { usePagination } from '../hooks/usePagination'
  import { useFilter } from '../hooks/useFilter'
  import FilterBooks from './filters/FilterBooks.svelte'
  import { paginationState } from '../store/pagination-store'
  import { filters } from '../store/filters-store'

  const booksFiltered = useFilter(filters)
  const booksList = usePagination(booksFiltered, paginationState)
</script>

<section class="bg-light h-full p-10">
  <h1 class="text-4xl"><i>Biblioteca</i></h1>
  <div class="pt-5">
    <h2>Disponibles: {$appState.books.length}</h2>
    <h3>En lista de lectura: {$appState.readingBooks.length}</h3>
  </div>
  <FilterBooks />
  <BooksList {booksList} {booksFiltered} />
</section>
