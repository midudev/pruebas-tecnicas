import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Genres, type Book } from '../types'

export function useFilters () {
  const { filters, setFilters } = useContext(AppContext)

  function changePages (pages: number) {
    setFilters({ ...filters, pages })
  }

  function changeGenre (genre: Genres) {
    setFilters({ ...filters, genre })
  }

  function filterBooks (books: Book[]) {
    return books.filter(book => {
      const filterPages = book.pages <= filters.pages
      const filterGenre = book.genre === filters.genre

      if (filters.genre === Genres.ALL) {
        return filterPages
      }

      return filterPages && filterGenre
    })
  }

  return { filters, changeGenre, changePages, filterBooks }
}
