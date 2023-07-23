<script lang="ts">
  import { appState } from '../store/app-state-store'
  import BooksList from './BooksList.svelte'
  import { usePagination } from '../hooks/usePagination'
  import { filters } from '../store/filters-store'
  import FilterBooks from './filters/FilterBooks.svelte'
  import { paginationState } from '../store/pagination-store'
  import { useFilter } from '../hooks/useFilter'

  const booksFiltered = useFilter(filters)
  const booksList = usePagination(booksFiltered, paginationState)
</script>

<section class="bg-light h-full p-3 xl:p-10 xl:h-screen">
  <h1 class="text-4xl xl:mt-0"><i>Biblioteca</i></h1>
  <div
    class="flex gap-2 items-center pt-2 justify-center xl:pt-5 xl:flex-col xl:items-start"
  >
    <h2>📚 Disponibles: {$appState.books.length}</h2>
    <h3>📖 En lista de lectura: {$appState.readingBooks.length}</h3>
  </div>
  <FilterBooks />
  <BooksList {booksList} {booksFiltered} />
</section>
