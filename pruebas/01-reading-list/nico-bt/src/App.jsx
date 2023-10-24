import "./App.css"
import useBooksData from "./hooks/useBooksData"
import useExtractBooksData from "./hooks/useExtractBooksData"
import useFilterBooks from "./hooks/useFilterBooks"
import { useEffect, useState } from "react"
import UserList from "./components/UserList"
import BookList from "./components/BookList"
import FilterDiv from "./components/FilterDiv"
import { useUserContext } from "./context/userContext"

function App() {
  const { books, isLoading, error } = useBooksData()
  const { userList, setNumberOfAvailableBooks } = useUserContext()
  const [minimizeList, setMinimizeList] = useState(false)

  const { maxPages, minPages, allGenres } = useExtractBooksData(books)

  const { filterBooks, filter, setFilter } = useFilterBooks(maxPages)

  const filteredBooks = filterBooks(books, filter)

  useEffect(() => {
    setFilter({ genre: "all", maxPages: maxPages, sortByPages: "default" })
  }, [maxPages, setFilter])

  useEffect(() => {
    setNumberOfAvailableBooks(books.length)
  }, [books, setNumberOfAvailableBooks])

  return (
    <main>
      <UserList minimizeList={minimizeList} setMinimizeList={setMinimizeList} />

      <section style={{ marginTop: !minimizeList && userList.length > 0 ? 230 : 60 }}>
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
