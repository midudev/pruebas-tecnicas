import "./App.css"
import useBooksData from "./hooks/useBooksData"
import useExtractBooksData from "./hooks/useExtractBooksData"
import useFilterBooks from "./hooks/useFilterBooks"
import { useEffect } from "react"
import UserList from "./components/UserList"
import BookList from "./components/BookList"
import FilterDiv from "./components/FilterDiv"

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
      <section style={{ marginTop: 222 }}>
        <FilterDiv
          filter={filter}
          setFilter={setFilter}
          allGenres={allGenres}
          maxPages={maxPages}
          minPages={minPages}
        />

        <BookList filteredBooks={filteredBooks} />
      </section>
    </main>
  )
}

export default App
