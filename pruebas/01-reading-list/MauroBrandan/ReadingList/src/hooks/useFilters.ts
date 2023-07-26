import { useContext } from 'react'
import type { BookType, FiltersType } from '../types'
import { FiltersContext } from '../contexts/filters'
import { useReadingList } from './useReadingList'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext) as {filters: FiltersType, setFilters: (filters: FiltersType) => void}
  const { isInList } = useReadingList()

  const filterBooks = (books: BookType[]) => {
    return books.filter(book => (
      !isInList(book) && (
        filters.genre === 'all' ||
        book.genre === filters.genre
      )
    ))
  }

  return { filters, filterBooks, setFilters }
}
