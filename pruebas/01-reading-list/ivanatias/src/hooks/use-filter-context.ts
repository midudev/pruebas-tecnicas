import { useState, useRef, useCallback } from 'react'
import { useBooks } from '@/hooks/use-books'
import { useSyncStorage } from '@/hooks/use-sync-storage'
import type { BooksList } from '@/utils/books'

const DEFAULT_GENRE = 'todos'

interface FiltersState {
  minPages: number
  genre: string
}

export function useFiltersContext(storageKey: string) {
  const { minPages } = useBooks()

  const defaultState = useRef<FiltersState>({
    minPages,
    genre: DEFAULT_GENRE
  })

  const [filters, setFilters] = useState<FiltersState>(() => {
    const storedFilters = window.localStorage.getItem(storageKey)

    return storedFilters === null
      ? defaultState.current
      : (JSON.parse(storedFilters) as FiltersState)
  })

  useSyncStorage(storageKey, defaultState.current, setFilters)

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
    const newFilters = {
      ...filters,
      minPages
    }

    window.localStorage.setItem(storageKey, JSON.stringify(newFilters))
    setFilters(newFilters)
  }

  const filterByGenre = (genre: string) => {
    const newFilters = {
      ...filters,
      genre
    }

    window.localStorage.setItem(storageKey, JSON.stringify(newFilters))
    setFilters(newFilters)
  }

  return {
    filters,
    filterBooks,
    filterByPages,
    filterByGenre
  }
}
