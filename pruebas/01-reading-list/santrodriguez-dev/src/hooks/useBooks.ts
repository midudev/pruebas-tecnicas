import { useContext } from 'react'
import { NUM_ITEMS } from '../constants'
import { useReadingListStore } from '../store/reading-list-store'
import { FiltersContext } from '../context/filters-context'

export const useBooks = () => {
  const books = useReadingListStore(store => store.books)
  const { genreFilter, currentPage } = useContext(FiltersContext)

  const availableBooks = books.filter(book => !book.isSelected)
  const filteredBooks = !genreFilter
    ? availableBooks
    : availableBooks.filter(book => book.genre === genreFilter)
  const pageFrom = NUM_ITEMS * (currentPage - 1)
  const pageTo = (currentPage * NUM_ITEMS)

  return {
    books,
    filteredBooks,
    pageFrom,
    pageTo
  }
}
