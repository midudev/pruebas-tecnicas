import { addBook, deleteBook, getAllBookFromStorage } from '../store/books/slice'
import { useAppDispatch } from './useStore'
export const useBooksActions = () => {
  const dispatch = useAppDispatch()
  const getAlldata = () => {
    dispatch(getAllBookFromStorage())
  }
  const removeBook = (ISBN) => {
    dispatch(deleteBook(ISBN))
  }
  const addMyBook = (Book) => {
    dispatch(
      addBook(Book)
    )
  }

  return { removeBook, addMyBook, getAlldata }
}
