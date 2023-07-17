<script lang="ts">
  import BooksList from './Books-list.svelte'
  import { writable } from 'svelte/store'
  import type { BooksFilters, PaginationState } from './types'
  import { usePagination } from './hooks/usePagination'
  import { useFilter } from './hooks/useFilter'
  import FilterBooks from './FilterBooks.svelte'

  const filters = writable<BooksFilters>({
    genre: '',
    title: '',
  })

  const booksFiltered = useFilter(filters)

  const paginationState = writable<PaginationState>({ init: 0, offset: 4 })
  const booksList = usePagination(booksFiltered, paginationState)
</script>

<section class="bg-light h-full p-10">
  <h1 class="text-4xl"><i>Biblioteca</i></h1>
  <FilterBooks {filters} />
  <BooksList {booksList} {paginationState} {booksFiltered} />
</section>
