import { useBooksStore } from '../store/books'
import { BOOK_FILTERS } from '../constants/constants'
import { FilterValue } from '../types'

const useGenreFilter = () => {
  const filters = useBooksStore(state => state.filters)
  const setFilters = useBooksStore(state => state.setFilters)
  const setFilteredBooks = useBooksStore(state => state.setFilteredBooks)

  const { genres } = filters

  const setFilterCategory = (genre: FilterValue) => {
    if (!genres.includes(genre)) {
      const filteredGenre = [...genres, genre]
      setFilters({
        property: BOOK_FILTERS.GENRE,
        value: filteredGenre,
      })
    } else {
      const updatedGenre = genres.filter(n => n !== genre)
      setFilters({
        property: BOOK_FILTERS.GENRE,
        value: updatedGenre,
      })
    }
    setFilteredBooks()
  }

  return {
    setFilterCategory,
  }
}

export default useGenreFilter
