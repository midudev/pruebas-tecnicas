import { useContext, useId } from 'react'
import { getGenres, getMaxPages, getMinPages } from '../services/books.service'
import { FiltersContext } from '../context/FiltersContext'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const searchFilterId = useId()
  const genresFilterId = useId()
  const pagesFilterId = useId()

  const minPages = getMinPages()
  const maxPages = getMaxPages()
  const genres = getGenres()

  const handleChange = (e) => {
    if (e.target.id === searchFilterId) setFilters({ ...filters, search: e.target.value })
    if (e.target.id === pagesFilterId) setFilters({ ...filters, pages: e.target.value })
  }

  const handleGenresChange = (selectedItems) => {
    setFilters({ ...filters, genres: selectedItems })
  }

  return { searchFilterId, genresFilterId, pagesFilterId, genres, minPages, maxPages, filters, handleChange, handleGenresChange }
}
