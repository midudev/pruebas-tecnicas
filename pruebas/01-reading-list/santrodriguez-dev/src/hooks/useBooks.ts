import { useContext, useMemo } from 'react'
import { NUM_ITEMS } from '../constants'
import { useReadingListStore } from '../store/reading-list-store'
import { FiltersContext } from '../context/filters-context'

export const useBooks = () => {
  const books = useReadingListStore(store => store.books)
  const { genreFilter, currentPage, inputSearchValue } = useContext(FiltersContext)

  const pageFrom = NUM_ITEMS * (currentPage - 1)
  const pageTo = (currentPage * NUM_ITEMS)

  const booksToShow = useMemo(() =>
    books.filter(({ isSelected, title, genre }) =>
      !isSelected &&
      title.toLocaleLowerCase().includes(inputSearchValue.toLocaleLowerCase()) &&
      genre.startsWith(genreFilter)),
  [books, inputSearchValue, genreFilter])

  return {
    books,
    booksToShow,
    pageFrom,
    pageTo
  }
}
