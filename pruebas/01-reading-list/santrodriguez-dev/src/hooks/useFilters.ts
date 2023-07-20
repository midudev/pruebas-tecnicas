import { useContext } from 'react'
import { FiltersContext } from '../context/filters-context'

import { useReadingListStore } from '../store'

export const useFilters = () => {
  const genres = useReadingListStore(store => store.genres)
  const { setCurrentPage, setGenreFilter, setInputSearchValue } = useContext(FiltersContext)

  const handleChangeFilter = (filterSelected: string) => {
    setGenreFilter(filterSelected)
    setCurrentPage(1)
  }

  return {
    handleChangeFilter,
    genres,
    setInputSearchValue
  }
}
