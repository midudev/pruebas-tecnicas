import { createContext, useEffect, useState } from 'react'
import { useBooks } from '../hooks/useBooks'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const { books } = useBooks()

  const [filters, setFilters] = useState({
    genre: '',
    maxPages: 0,
    defaultFilters: {
      allGenres: [],
      bookWithMorePages: 0
    }
  })

  useEffect(() => {
    if (!books.length) return

    const getMaxPosiblePages = () => {
      const PAGE_MAX_INPUT_TOLERANCE = 10

      const bookWithMorePages = books.reduce((maxPages, book) => {
        return book.pages > maxPages
          ? book.pages
          : maxPages
      }, -Infinity)

      return bookWithMorePages + PAGE_MAX_INPUT_TOLERANCE
    }

    const getUniqueGenres = () => {
      const allGenres = books.map(({ genre }) => genre)
      const uniqueGenres = new Set([...allGenres])

      return [...uniqueGenres]
    }

    const maxPosiblePages = getMaxPosiblePages()

    setFilters(prevState => ({
      ...prevState,
      maxPages: maxPosiblePages,
      defaultFilters: {
        allGenres: getUniqueGenres(),
        bookWithMorePages: maxPosiblePages
      }
    }))
  }, [books])

  const filterBooks = (books) => {
    return books.filter(book => (!filters.genre ||
        book.genre === filters.genre) &&
        book.pages <= filters.maxPages
    )
  }

  const filteredBooks = filterBooks(books)

  return (
    <FiltersContext.Provider
      value={{
        filters,
        filteredBooks,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
