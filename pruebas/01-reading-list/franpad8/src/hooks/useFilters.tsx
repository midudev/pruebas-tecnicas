import { useState } from 'react'
import { type Book, Genre } from '../types.d'
import { localeIncludes } from 'locale-includes'

function useFilters () {
  const [categoryFilter, setCategoryFilter] = useState<Genre>(Genre.ALL)
  const [pagesFilter, setPagesFilter] = useState<number>(2000)
  const [searchFilter, setSearchFilter] = useState<string>('')

  function filterByCategoryBooks (books: Book[]): Book[] {
    return categoryFilter !== Genre.ALL
      ? books.filter(book => book.genre === categoryFilter)
      : books
  }

  function filterByTitleBooks (books: Book[]): Book[] {
    if (searchFilter.length === 0) return books

    return books.filter(book => localeIncludes(book.title.toLowerCase(), searchFilter.toLowerCase()))
  }

  return {
    categoryFilter,
    pagesFilter,
    searchFilter,
    filterByCategoryBooks,
    filterByTitleBooks,
    changeCategoryFilter: setCategoryFilter,
    changePagesFilter: setPagesFilter,
    changeSearchFilter: setSearchFilter
  }
}

export default useFilters
