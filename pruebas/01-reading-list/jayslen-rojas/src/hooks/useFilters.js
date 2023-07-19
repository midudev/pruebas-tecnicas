import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
// import booksMocks from '../mocks/books.json'

export function useFilters () {
  const { updateState, books } = useContext(BooksContext)
  const filterBooks = (event) => {
    const booksFilterd = books.filter((item) => {
      return event.target.value.toLowerCase() === 'todos' || event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === item.book.genre.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    })
    updateState({ value: booksFilterd })
  }
  return { filterBooks }
}
