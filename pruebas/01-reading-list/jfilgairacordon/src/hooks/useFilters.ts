import { useMemo } from 'react'
import { FilterTypes } from '../types.d'
import { useBooks } from './useBooks'

export function useFilters () {
  const { books, filters, setFilters } = useBooks()
  const { genre, pages } = filters

  const handleOnChangeFilter = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (event.target.name === FilterTypes.GENRE) {
      setFilters({
        ...filters,
        genre: event.target.value
      })
    }

    if (event.target.name === FilterTypes.PAGES) {
      setFilters({
        ...filters,
        pages: Number(event.target.value)
      })
    }
  }
  const handleResetFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilters({
      genre: '',
      pages: 0
    })
    event.preventDefault()
  }

  const maxPages = useMemo(() => Math.max(...books.map(book => book.pages)), [books])
  const genres = useMemo(() => [...new Set(books.map(book => book.genre))], [books])

  return {
    genre,
    pages,
    maxPages,
    genres,
    handleOnChangeFilter,
    handleResetFilters
  }
}
