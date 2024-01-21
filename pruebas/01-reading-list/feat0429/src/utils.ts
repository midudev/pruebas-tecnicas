import { type Genre } from './constants/genres.ts'
import { INITIAL_PAGINATION_RANGE, DEFAULT_PAGINATION_SIBLINGS } from './constants/pagination.ts'
import type { Book as BookType, PaginationParameters, PaginationRange } from './type.d.ts'

export function roundPages (pagesCount: number, multipleNumber: number) {
  const roundedPages = Math.ceil(pagesCount / multipleNumber) * multipleNumber

  return roundedPages
}

export const sortBooks = (books: BookType[]) => {
  books.sort((a, b) => a.title.localeCompare(b.title))

  return books
}

export const getMaximumPages = (books: BookType[]) => {
  const maximumPages = Math.max(...books.map(book => book.pages))

  return maximumPages
}

export const countBooksByGenre = (books: BookType[], genre: Genre) => {
  const bookByGenre = books.filter(book => book.genre === genre)

  return bookByGenre.length
}

export const getPaginationNumbers = (paginationRange: PaginationRange) => {
  const { startPage, endPage } = paginationRange
  const range = endPage - startPage + 1
  const pageNumbers = [...Array(range).keys()].map(offsetNumber => offsetNumber + startPage)

  return pageNumbers
}

export const getPaginationRange = (
  {
    totalPages,
    currentPage,
    siblings = DEFAULT_PAGINATION_SIBLINGS
  }: PaginationParameters): PaginationRange => {
  const pagesRange = 2 * siblings + 1

  if (totalPages < pagesRange) {
    return { startPage: INITIAL_PAGINATION_RANGE.StartPage, endPage: totalPages }
  }

  if (currentPage < pagesRange) {
    return { startPage: INITIAL_PAGINATION_RANGE.StartPage, endPage: pagesRange }
  }

  if (totalPages - currentPage < pagesRange - 1) {
    return { startPage: totalPages - pagesRange + 1, endPage: totalPages }
  }

  return { startPage: currentPage - siblings, endPage: currentPage + siblings }
}
