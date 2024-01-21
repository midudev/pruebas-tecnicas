import { useState } from 'react'
import { FIRST_PAGE, BOOKS_PER_PAGE } from '../constants/pagination'
import { type PaginationState, type Book as BookType } from '../type'

export function usePagination () {
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: FIRST_PAGE,
    firstIndex: 0,
    lastIndex: BOOKS_PER_PAGE
  })

  const sliceBooks = (books: BookType[]) => books.slice(pagination.firstIndex, pagination.lastIndex)

  const changePage = (currentPage: number) => {
    const lastIndex = currentPage * BOOKS_PER_PAGE
    const firstIndex = lastIndex - BOOKS_PER_PAGE

    setPagination({ currentPage, firstIndex, lastIndex })
  }

  return {
    pagination,
    setPagination,
    sliceBooks,
    changePage
  }
}
