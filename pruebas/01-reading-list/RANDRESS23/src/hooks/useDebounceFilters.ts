import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type Library, type FiltersBooks, type Book, BOOKS_GENRE_TYPES } from '../models'
import { type AppStore } from '../redux'
import { addBookFiltered, removeBookFiltered, sortBooks } from '../redux/states/booksFiltered'
import { addBookAvailable, removeBookAvailable } from '../redux/states/booksAvailable'
import { addBookToRead, removeBookToRead } from '../redux/states/booksToRead'

interface UseDebounceFilters {
  booksToRead: Library
  booksFiltered: Library
  handleAddToRead: ({ book }: { book: Book }) => void
  handleRemoveBookToRead: ({ book }: { book: Book }) => void
}

export const useDebounceFilters = (): UseDebounceFilters => {
  const booksAvailable: Library = useSelector((state: AppStore) => state.booksAvailable)
  const booksToRead: Library = useSelector((state: AppStore) => state.booksToRead)
  const booksFiltered: Library = useSelector((state: AppStore) => state.booksFiltered)
  const filtersBooks: FiltersBooks = useSelector((state: AppStore) => state.filtersBooks)
  const dispatch = useDispatch()

  const handleAddToRead = ({ book }: { book: Book }): void => {
    dispatch(addBookToRead({ newBook: book }))
    dispatch(removeBookAvailable({ bookISBN: book.ISBN }))
    dispatch(removeBookFiltered({ bookISBN: book.ISBN }))
  }

  const handleRemoveBookToRead = ({ book }: { book: Book }): void => {
    dispatch(removeBookToRead({ bookISBN: book.ISBN }))
    dispatch(addBookAvailable({ newBook: book }))

    if (filtersBooks.genre === book.genre || filtersBooks.genre === BOOKS_GENRE_TYPES.ALL) {
      dispatch(addBookFiltered({ newBook: book }))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const { titleOrAuthor, genre, pages } = filtersBooks

      dispatch(sortBooks({ booksAvailable, titleOrAuthor, genre, pages }))
    }, 500)

    return () => { clearTimeout(timer) }
  }, [filtersBooks])

  return { booksToRead, booksFiltered, handleAddToRead, handleRemoveBookToRead }
}
