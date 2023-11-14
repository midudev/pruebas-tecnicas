import { IISBNProp } from '../interfaces/interfacesComponents'
import { useAppDispatch } from './store'
import {
  addToReadingList,
  removeFromReadingList,
  setCountBooksFilters
} from '../reducers/libraries'

export function useLibraryReducer () {
  const dispatch = useAppDispatch()

  const addBookToReadingList = ({ ISBN }: IISBNProp) => {
    dispatch(addToReadingList({ ISBN }))
  }

  const removeBookFromReadingList = ({ ISBN }: IISBNProp) => {
    dispatch(removeFromReadingList({ ISBN }))
  }

  const handleCountBooksFilters = ({ countBookFiltered }: { countBookFiltered: number }) => {
    dispatch(setCountBooksFilters({ countBookFiltered }))
  }

  return {
    addBookToReadingList,
    removeBookFromReadingList,
    handleCountBooksFilters
  }
}
