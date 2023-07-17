import { useLibraryStore } from '../store/library'

export const useFilters = () => {
  const filters = useLibraryStore(state => state.filters)

  const filterBooks = (library) => {
    return (
      library?.filter(book => {
        return (
          book.pages >= filters.minPages && (
            filters.genre === 'Todos' ||
            book.genre === filters.genre
          )
        )
      })
    )
  }

  return { filterBooks }
}
