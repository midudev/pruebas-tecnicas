import { type TWrapedBooks } from '@/types'
import { useState } from 'react'

const utilSearchIncludes = (searchParam: string, compare: string) => {
  return compare.toLowerCase().includes(searchParam.toLowerCase())
}

export const useFilters = (data: TWrapedBooks) => {
  const [filterByGenre, setFiltereByGenre] = useState<string>('')
  const [searchParam, setSearchParam] = useState('')
  const [filterByPage, setFiltereByPage] = useState(0)

  const setActualFilterByGenre = (newFilterByGenre: string) => {
    setFiltereByGenre(newFilterByGenre)
  }
  const setActualSearchParam = (newSearchParam: string) => {
    setSearchParam(newSearchParam)
  }

  const setActualFilterByPage = (newFilterByPage: number) => {
    setFiltereByPage(newFilterByPage)
  }

  const foundBooks = searchParam !== ''
    ? data.filter((wrapedBook) => utilSearchIncludes(searchParam, wrapedBook.book.title) || utilSearchIncludes(searchParam, wrapedBook.book.author.name))
    : data

  const filteredBooksByGenre = filterByGenre !== '' ? foundBooks.filter((wrapedBook) => wrapedBook.book.genre === filterByGenre) : foundBooks

  const filteredBooksByPage = filterByPage !== 0 ? filteredBooksByGenre.filter((wrapedBook) => wrapedBook.book.pages >= filterByPage) : filteredBooksByGenre

  return { data: filteredBooksByPage, setActualFilterByGenre, setActualSearchParam, setActualFilterByPage }
}
