import { useFiltersContext } from '../context/filtersContext'
import { DEFAULT_FILTERS } from '../utils/constants'

export default function useFilters () {
  const { filters, setFilters } = useFiltersContext()

  const getFilteredBooks = ({ library }) => {
    const { gender, pages, title } = filters
    return library.filter(({ book }) => {
      return (
        (gender === 'Todas' || book.genre === gender) &&
        book.title.toLowerCase().includes(title?.toLowerCase()) &&
        book.pages >= pages
        // && book.author.toLowerCase().includes(author?.toLowerCase())
      )
    })
  }

  const resetFilters = () => {
    window.localStorage.setItem('filters', JSON.stringify(DEFAULT_FILTERS))
    setFilters(DEFAULT_FILTERS)
  }

  return { filters, setFilters, getFilteredBooks, resetFilters }
}
