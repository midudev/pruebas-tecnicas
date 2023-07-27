import { useContext } from "react"
import { booksContext } from "../contexts/booksContext"
import { filterContext } from "../contexts/filterContext"

export const useBooksContextFilter = () => {
  const { books } = useContext(booksContext)
  const contextFilter = useContext(filterContext)

  if (contextFilter === undefined) {
    throw new Error(
      "useLibraryContextFilter must be used within a filterContextProvider",
    )
  }

  const { filter, setFilter } = contextFilter
  const getBooksFilter = () => {
    return books.filter(
      ({ reading, pages, genre, title }) =>
        reading === false &&
        pages >= filter.pages &&
        title.toLowerCase().includes(filter.title.toLowerCase()) &&
        (genre === filter.genres || filter.genres === "all"),
    )
  }
  return { getBooksFilter, setFilter, filter }
}
