import { useMemo } from 'react'
import { useLibraryStore } from '../store'

const useAvailableBooks = () => {
  const { availableBooks, filteredBooks } = useLibraryStore()
  const readlist = useLibraryStore((state) => state.readlist)

  const availableFilteredBooks = useMemo(() => filteredBooks.length, [filteredBooks])
  const availableReadList = useMemo(() => readlist.length, [readlist])
  const isTheSameLength = useMemo(() => availableFilteredBooks === availableBooks, [availableFilteredBooks, availableBooks])
  return {
    availableBooks,
    availableReadList,
    availableFilteredBooks,
    isTheSameLength,
  }
}

export default useAvailableBooks
