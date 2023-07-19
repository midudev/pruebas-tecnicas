import { useLibraryStore } from '../store'
import useGenericFilter from './useGenericFilter'

const useLibraryFilters = () => {
  const {
    filters: { query, genre, pages },
    genres,
    minPages,
    maxPages,
    resetFilters,
    setFilteredBooks,
  } = useLibraryStore()

  const { state: searchValue, handleEvent: onInputChange, setState: setSearchValue } = useGenericFilter<string>(query ?? '', 'query')
  const { state: selectedGenre, handleEvent: onSelectChange, setState: setSelectedGenre } = useGenericFilter<string>(genre ?? '', 'genre')
  const { state: pagesState, handleEvent: onPagesStateChange, setState: setPagesState } = useGenericFilter<number>(pages ?? 0, 'pages')

  const clearFilters = () => {
    //reset filters from inputs
    setSearchValue('')
    setSelectedGenre('')
    setPagesState(maxPages)

    //reset filters from store
    resetFilters()
    setFilteredBooks()
  }

  return {
    genres,
    maxPages,
    minPages,

    searchValue,
    pagesState,
    selectedGenre,

    onInputChange,
    onSelectChange,
    onPagesStateChange,

    clearFilters,
  }
}

export default useLibraryFilters
