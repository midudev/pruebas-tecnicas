import { createContext, useState } from 'react'
import { useBooks } from '../hooks/useBooks'

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
  const { books } = useBooks()

  const [filters, setFilters] = useState(() => {
    const maxPagesTolerance = 10

    const bookWithMorePages = books.reduce((maxPages, book) => {
      return book.pages > maxPages ? book.pages : maxPages
    }, -Infinity)

    return {
      genre: '',
      maxPages: bookWithMorePages,
      bookWithMorePages: bookWithMorePages + maxPagesTolerance
    }
  })

  const filterBooks = (books) => {
    return books.filter(book => {
      return (!filters.genre || book.genre === filters.genre) && book.pages <= filters.maxPages
    })
  }

  const filteredBooks = filterBooks(books)

  return (
    <FiltersContext.Provider
      value={{
        filters,
        filteredBooks,
        setFilters,
        filterBooks
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
