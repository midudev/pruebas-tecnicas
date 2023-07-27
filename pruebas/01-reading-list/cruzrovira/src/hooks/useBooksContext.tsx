import { useContext } from "react"
import { booksContext } from "../contexts/booksContext"

export const useBooksContext = () => {
  const context = useContext(booksContext)
  if (context === undefined) {
    throw new Error(
      "useBooksContext must be used within a BooksContextProvider",
    )
  }
  return context
}
