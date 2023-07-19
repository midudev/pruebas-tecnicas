import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"
import { FiltersContext } from "../context/FiltersContext"
import { ReadListContext } from "../context/ReadListContext"
import { IBook } from "../types"

export function useFilters() {
  const { books } = useContext(BooksContext)
  const { readList } = useContext(ReadListContext)
  const { filters, setFilters } = useContext(FiltersContext)

  function filterBooks(): IBook[] {
    return books.filter(book => {
      return (
        book.pages >= filters.pages &&
        (filters.genre === 'all' || book.genre === filters.genre) &&
        !readList.some(b => b.ISBN === book.ISBN)
      )
    })
  }

  return { filters, filterBooks, setFilters }
}