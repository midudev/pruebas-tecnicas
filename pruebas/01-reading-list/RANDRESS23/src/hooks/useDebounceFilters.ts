import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type Library, type FiltersBooks, type Book } from '../models'
import { type AppStore } from '../redux'
import { removeBookFiltered, sortBooks } from '../redux/states/booksFiltered'
import { removeBookAvailable } from '../redux/states/booksAvailable'
import { addBookToRead } from '../redux/states/booksToRead'

interface UseDebounceFilters {
  booksFiltered: Library
  handleAddToRead: ({ book }: { book: Book }) => void
}

export const useDebounceFilters = (): UseDebounceFilters => {
  const booksAvailable: Library = useSelector((state: AppStore) => state.booksAvailable)
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const booksFiltered: Library = useSelector((state: AppStore) => state.booksFiltered)
  const dispatch = useDispatch()

  const handleAddToRead = ({ book }: { book: Book }): void => {
    dispatch(addBookToRead({ newBook: book }))
    dispatch(removeBookAvailable({ bookISBN: book.ISBN }))
    dispatch(removeBookFiltered({ bookISBN: book.ISBN }))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const { title, author, genre, pages } = filtersBooks

      dispatch(sortBooks({ booksAvailable, title, author, genre, pages }))
    }, 500)

    return () => { clearTimeout(timer) }
  }, [filtersBooks])

  return { booksFiltered, handleAddToRead }
}
