import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { type FiltersBooks, LOCAL_STORAGE_KEYS, type Library } from '../models'
import { changeBooksToRead } from '../redux/states/booksToRead'
import { changeBooksAvailable } from '../redux/states/booksAvailable'
import { changeBooksFiltered } from '../redux/states/booksFiltered'
import { changeFiltersBooks } from '../redux/states/filtersBooks'

export const useSyncStorage = (): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleStorage = (event: StorageEvent): void => {
      if (event.key === LOCAL_STORAGE_KEYS.FILTERS_BOOKS) {
        if (event.newValue !== null) {
          const newFiltersBooks: FiltersBooks = JSON.parse(event.newValue)
          dispatch(changeFiltersBooks({ newFiltersBooks }))
        }
      }

      if (event.key === LOCAL_STORAGE_KEYS.BOOKS_TO_READ) {
        if (event.newValue !== null) {
          const newBooksToRead: Library = JSON.parse(event.newValue)
          dispatch(changeBooksToRead({ newBooksToRead }))
        }
      }

      if (event.key === LOCAL_STORAGE_KEYS.BOOKS_AVAILABLE) {
        if (event.newValue !== null) {
          const newBooksAvailable: Library = JSON.parse(event.newValue)
          dispatch(changeBooksAvailable({ newBooksAvailable }))
        }
      }

      if (event.key === LOCAL_STORAGE_KEYS.BOOKS_FILTERED) {
        if (event.newValue !== null) {
          const newBooksFiltered: Library = JSON.parse(event.newValue)
          dispatch(changeBooksFiltered({ newBooksFiltered }))
        }
      }
    }

    window.addEventListener('storage', handleStorage)

    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])
}
