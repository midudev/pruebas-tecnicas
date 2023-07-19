import { useContext } from 'react'

import { FiltersContext } from '../context/filters-context'

import { useReadingListStore } from '../store'

export const useFilters = () => {
  const genres = useReadingListStore(store => store.genres)
  const { setCurrentPage, currentPage, setGenreFilter } = useContext(FiltersContext)
  // const books = useReadingListStore(store => store.books)

  // const availableBooks = books.filter(book => !book.isSelected)
  // const filteredBooks = !genreFilter
  //   ? availableBooks
  //   : availableBooks.filter(book => book.genre === genreFilter)

  // const pageFrom = NUM_ITEMS * (currentPage - 1)
  // const pageTo = (currentPage * NUM_ITEMS)

  // const handleSetCurrentPage = (isNext: boolean) => {
  //   setCurrentPage(curr => {
  //     if (isNext) return Math.min(Math.ceil(filteredBooks.length / NUM_ITEMS), curr + 1)
  //     return Math.max(1, curr - 1)
  //   })
  // }

  const handleChangeFilter = (filterSelected: string) => {
    setGenreFilter(filterSelected)
    setCurrentPage(1)
  }

  return {
    currentPage,
    handleChangeFilter,
    genres
  }
}
