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
    const filterBySearch = (filters.search) ? (
      books.filter(book => {
        return (
          book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          book.author.name.toLowerCase().includes(filters.search.toLowerCase())
        )
      })
    ) : books

    return filterBySearch.filter(book => {
      return (
        book.pages >= filters.pages &&
        (filters.genre === 'all' || book.genre === filters.genre) &&
        !readList.some(b => b.ISBN === book.ISBN)
      )
    })
  }

  return { filters, filterBooks, setFilters }
}