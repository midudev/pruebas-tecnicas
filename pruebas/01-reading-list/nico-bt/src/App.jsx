import "./App.css"
import useBooksData from "./hooks/useBooksData"
import useExtractBooksData from "./hooks/useExtractBooksData"
import useFilterBooks from "./hooks/useFilterBooks"
import { useEffect } from "react"
import UserList from "./components/UserList"
import BookList from "./components/BookList"

function App() {
  const { books, isLoading, error } = useBooksData()

  const { maxPages, minPages, allGenres } = useExtractBooksData(books)

  const { filterBooks, filter, setFilter } = useFilterBooks(maxPages)

  const filteredBooks = filterBooks(books, filter)

  useEffect(() => {
    setFilter({ genre: "all", maxPages: maxPages, sortByPages: "default" })
  }, [maxPages, setFilter])

  return (
    <main>
      <UserList />

      <BookList filteredBooks={filteredBooks} />
    </main>
  )
}

export default App
