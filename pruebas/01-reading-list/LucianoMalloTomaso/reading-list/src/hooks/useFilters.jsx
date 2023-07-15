import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)
  const filterBooks = (books) => {
    return books.filter(book => {
      return (
        book.pages >= filters.minPages &&
         (
           filters.genre === 'all' ||
          book.genre === filters.genre
         )
      )
    })
  }
  const sortBooks = (books) => {
    return filters.orderByTitle
      ? [...books].sort((a, b) => a.title.localeCompare(b.title))
      : books
  }

  return { filters, filterBooks, setFilters, sortBooks }
}
