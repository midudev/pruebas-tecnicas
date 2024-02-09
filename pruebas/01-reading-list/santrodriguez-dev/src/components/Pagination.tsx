import { useContext } from 'react'
import { useReadingListStore } from '../store'
import { FiltersContext } from '../context/filters-context'
import { NUM_ITEMS } from '../constants'

export const Pagination = () => {
  const books = useReadingListStore(store => store.books)
  const { setCurrentPage, currentPage, genreFilter } = useContext(FiltersContext)
  const isFirstPage = currentPage === 1

  const availableBooks = books.filter(book => !book.isSelected)
  const filteredBooks = !genreFilter
    ? availableBooks
    : availableBooks.filter(book => book.genre === genreFilter)

  const maxPages = Math.ceil(filteredBooks.length / NUM_ITEMS)
  const isLastPage = currentPage >= maxPages

  const handleSetCurrentPage = (isNext: boolean) => {
    setCurrentPage(curr => {
      if (isNext) return Math.min(Math.ceil(maxPages), curr + 1)
      return Math.max(1, curr - 1)
    })
  }

  return (
    <div className="flex flex-col items-center p-4">
  <span className="text-sm text-gray-700 dark:text-gray-400">
      Mostrando <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> de <span className="font-semibold text-gray-900 dark:text-white">{maxPages}</span> de <span className="font-semibold text-gray-900 dark:text-white">{filteredBooks.length}</span> Libros
  </span>
      <div className="inline-flex mt-2 xs:mt-0">

        <button onClick={() => { handleSetCurrentPage(false) }} disabled={isFirstPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
          Anterior
        </button>
        <button onClick={() => { handleSetCurrentPage(true) }} disabled={isLastPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Siguiente
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  )
}
