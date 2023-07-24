import { useContext } from "react"
import { FiltersContext } from "../context/FiltersContext"
import { ReadListContext } from "../context/ReadListContext"
import { IBook } from "../types"
import { useBooks } from "./useBooks"

export function useFilters() {
  const { books } = useBooks()
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