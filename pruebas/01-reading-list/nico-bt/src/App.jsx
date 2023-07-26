import "./App.css"
import useBooksData from "./hooks/useBooksData"
import { useUserContext } from "./context/userContext"
import Close from "@mui/icons-material/Close"
import useExtractBooksData from "./hooks/useExtractBooksData"
import useFilterBooks from "./hooks/useFilterBooks"
import { useEffect } from "react"

function App() {
  const { userList, addBook, removeBook } = useUserContext()
  const { books, isLoading, error } = useBooksData()

  const { maxPages, minPages, allGenres } = useExtractBooksData(books)

  const { filterBooks, filter, setFilter } = useFilterBooks(maxPages)

  const filteredBooks = filterBooks(books, filter)

  function handleClickAddToList(item) {
    addBook(item)
    // setBooks((prevState) => prevState.filter((book) => book.book.ISBN !== item.ISBN))
  }

  function handleClickRemoveFromList(item) {
    removeBook(item)
  }

  useEffect(() => {
    setFilter({ genre: "all", maxPages: maxPages, sortByPages: "default" })
  }, [maxPages, setFilter])

  return (
    <main>
      <section className="readingList-container">
        {userList?.length > 0 ? (
          <>
            <h2>Your list</h2>
            <ul>
              {userList.map((item) => (
                <li key={item.title}>
                  <span className="close-btn" onClick={() => handleClickRemoveFromList(item)}>
                    <Close fontSize="small" />
                  </span>
                  <img src={item.cover} alt={`${item.title} cover`} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>Your list is Empty</h2>
        )}
      </section>

      <section>
        <ul className="booklist-container">
          {filteredBooks?.map((item) => {
            const isItemInUserList = userList.some((bk) => bk.ISBN === item.ISBN)
            if (isItemInUserList) {
              return null
            } else {
              return (
                <li key={item.ISBN} onClick={() => handleClickAddToList(item)}>
                  <img src={item.cover} alt={`${item.title} cover`} />
                </li>
              )
            }
          })}
        </ul>
      </section>
    </main>
  )
}

export default App
