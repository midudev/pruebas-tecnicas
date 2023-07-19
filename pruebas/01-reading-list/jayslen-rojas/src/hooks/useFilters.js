import { useContext, useEffect } from 'react'
import { BooksContext } from '../context/BooksContext'
import { FiltersContext } from '../context/FiltersContex'

export function useFilters () {
  const { updateBooksState, storage } = useContext(BooksContext)
  const { filters, setFilters } = useContext(FiltersContext)

  useEffect(() => {
    const booksFilterd = storage.filter((item) => {
      return (filters.genre.toLowerCase() === 'Todos'.toLocaleLowerCase() && item.book.pages > filters.pages) || (filters.genre.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === item.book.genre.normalize('NFD').replace(/[\u0300-\u036f]/g, '') && item.book.pages > filters.pages)
    })
    updateBooksState({ value: booksFilterd })
  }, [filters])

  const updateFiltersState = ({ value }) => {
    if (typeof value === 'number') {
      setFilters(prevState => ({ pages: value, genre: prevState.genre }))
    } else {
      setFilters(prevState => ({ pages: prevState.pages, genre: value }))
    }
  }

  return { updateFiltersState, filters }
}
