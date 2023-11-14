import { useEffect } from 'react'
import { syncWindows } from '../utils/syncWindows'
import { useFilters } from './useFiltersActions'
import { useLibraryReducer } from './useLibraryReducer'

export function useSyncWindows () {
  const { handleNewGenre } = useFilters()
  const {
    addBookToReadingList,
    removeBookFromReadingList
  } = useLibraryReducer()

  useEffect(() => {
    syncWindows({
      handleNewGenre,
      addBookToReadingList,
      removeBookFromReadingList
    })
  }, [])
}
