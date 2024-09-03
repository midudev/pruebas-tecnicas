import { type Library } from '@/interfaces/interfaces'
import { useEffect, useState } from 'react'
import { useAppSelector } from './useStore'

export const useDebouncer = () => {
  const { bookToSearch } = useAppSelector((state) => state.booksFilter)
  const { data } = useAppSelector((state) => state.books)
  const [previousList, setPreviousList] = useState<Library[]>(data)
  const [finalBooksList, setFinalBooksList] = useState<Library[]>(data)

  useEffect(() => {
    const searchBooksFunction = () => {
      const searchTerms = bookToSearch.toLowerCase().split(' ')

      const finalBooks = previousList.filter((books) => {
        return searchTerms.every((term) => books.book.title.toLowerCase().includes(term))
      })
      setFinalBooksList(finalBooks)
    }

    const debouncerFunction = setTimeout(searchBooksFunction, 300)
    return () => { clearTimeout(debouncerFunction) }
  }
  , [bookToSearch, previousList])

  const handlePreviousList = (newList: Library[]) => {
    setPreviousList(newList)
  }

  return { finalBooksList, handlePreviousList }
}
