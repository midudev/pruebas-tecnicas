import { useReducer } from 'react'
import { ALL_BOOKS_GENRE, BOOKS_INITIAL_STATE } from '../constants'
import { booksReducer } from '../reducers/booksReducer'
import { type Book, type BookFilters } from '../types'

export function useStore () {
  const [{
    books,
    readList,
    loading,
    filters,
    sortReadListByPriority
  }, dispatch] = useReducer(booksReducer, BOOKS_INITIAL_STATE)

  const setBooks = (books: Book[]) => { dispatch({ type: 'SET_BOOKS', payload: books }) }
  const setReadList = (books: Book[]) => { dispatch({ type: 'SET_READ_LIST', payload: books }) }
  const addBook = (book: Book) => { dispatch({ type: 'ADD_BOOK', payload: book }) }
  const removeBook = (book: Book) => { dispatch({ type: 'REMOVE_BOOK', payload: book }) }
  const setBookPrio = (book: Book) => { dispatch({ type: 'SET_BOOK_AS_PRIO', payload: book }) }
  const setFilters = (filters: BookFilters) => { dispatch({ type: 'SET_FILTERS', payload: filters }) }
  const setSortReadListByPriority = (sort: boolean) => { dispatch({ type: 'SET_SORT_READ_LIST_BY_PRIORITY', payload: sort }) }

  const filterBooks = (books: Book[]) => {
    const { genre, pages } = filters

    return books.filter(book => {
      let genreMatch = true
      if (genre !== ALL_BOOKS_GENRE) {
        genreMatch = book.genre.toLowerCase().includes(genre.toLowerCase())
      }

      const pagesMatch = book.pages >= pages
      const notInReadList = !readList.some(readBook => readBook.ISBN === book.ISBN)
      return genreMatch && pagesMatch && notInReadList
    })
  }

  return {
    books,
    readList,
    loading,
    filters,
    sortReadListByPriority,
    setBooks,
    setReadList,
    addBook,
    removeBook,
    setBookPrio,
    setFilters,
    filterBooks,
    setSortReadListByPriority
  }
}
