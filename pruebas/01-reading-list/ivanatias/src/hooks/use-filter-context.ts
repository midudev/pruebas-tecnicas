import { useState, useCallback } from 'react'
import { useBooks } from '@/hooks/use-books'
import type { BooksList } from '@/utils/books'

const DEFAULT_GENRE = 'todos'

export function useFiltersContext() {
  const { minPages } = useBooks()

  const [filters, setFilters] = useState({
    minPages,
    genre: DEFAULT_GENRE
  })

  const filterBooks = useCallback(
    (books: BooksList) => {
      return books.filter(book => {
        return (
          book.pages >= filters.minPages &&
          (book.genre.toLowerCase() === filters.genre.toLowerCase() ||
            filters.genre === DEFAULT_GENRE)
        )
      })
    },
    [filters]
  )

  const filterByPages = (minPages: number) => {
    setFilters(prev => ({
      ...prev,
      minPages
    }))
  }

  const filterByGenre = (genre: string) => {
    setFilters(prev => ({
      ...prev,
      genre
    }))
  }

  return {
    filters,
    filterBooks,
    filterByPages,
    filterByGenre
  }
}
