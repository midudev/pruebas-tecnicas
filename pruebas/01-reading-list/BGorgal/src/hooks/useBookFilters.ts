import { useBooksStore } from '../store/books'

import useGenericFilter from './useGenericFilter'

const useBooksFilters = () => {
  const filters = useBooksStore(state => state.filters)
  const maxPages = useBooksStore(state => state.maxPages)
  const setFilteredBooks = useBooksStore(state => state.setFilteredBooks)

  const resetFilters = useBooksStore(state => state.resetFilters)

  const { search, pages } = filters

  const { state: searchValue , handleEvent: onInputChange,  setState: setSearchValue } =
    useGenericFilter<string>(search ?? '', 'search')
  const {
    state: pagesState,
    handleEvent: onPagesStateChange,
    setState: setPagesState,
  } = useGenericFilter<number>(pages ?? 0, 'pages')

  const clearFilters = () => {
    setSearchValue('')
    setPagesState(maxPages)
    resetFilters()
    setFilteredBooks()
  }

  return {
    searchValue,
    setSearchValue,
    pagesState,
    onInputChange,
    onPagesStateChange,
    setPagesState,
    clearFilters,
  }
}

export default useBooksFilters
