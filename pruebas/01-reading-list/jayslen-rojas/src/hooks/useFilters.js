import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
// import booksMocks from '../mocks/books.json'

export function useFilters () {
  const { updateBooksState, storage } = useContext(BooksContext)
  const filterBooks = (event) => {
    const booksFilterd = storage.filter((item) => {
      return event.target.value.toLowerCase() === 'todos' || event.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === item.book.genre.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    })
    updateBooksState({ value: booksFilterd })
    console.log(booksFilterd)
  }
  return { filterBooks }
}
