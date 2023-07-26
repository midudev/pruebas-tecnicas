import { useState } from 'react'
import { type Book, Genre } from '../types.d'

function useFilters () {
  const [categoryFilter, setCategoryFilter] = useState<Genre>(Genre.ALL)
  const [pagesFilter, setPagesFilter] = useState<number>(2000)

  function filterByCategoryBooks (books: Book[]) {
    return categoryFilter !== Genre.ALL
      ? books.filter(book => book.genre === categoryFilter)
      : books
  }

  return {
    categoryFilter,
    pagesFilter,
    filterByCategoryBooks,
    changeCategoryFilter: setCategoryFilter,
    changePagesFilter: setPagesFilter
  }
}

export default useFilters
