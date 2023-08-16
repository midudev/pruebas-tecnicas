import { useEffect, useRef, useState } from "react"
import "./App.css"
import BookList from "./components/BookList"
import { Book, BookListT, Genres } from "./types/Books"
import ReadListBooks from "./components/ReadListBooks"
import Header from "./components/Header"
import bookList from "./books.json"
function App() {
  const [books, setBooks] = useState<BookListT>(
    (JSON.parse(
      localStorage.getItem("books") || JSON.stringify(bookList)
    ) as BookListT) || bookList
  )
  const [BookAtAdd, setBookAtAdd] = useState<Book>({} as Book)
  const [AddNewBookToReadList, setAddNewBookToReadList] = useState(false)
  const [ReadList, setReadList] = useState(
    JSON.parse(
      localStorage.getItem("ReadList") ||
        JSON.stringify({
          library: []
        })
    ) as BookListT
  )

  const booksInitial = useRef<BookListT>(bookList as BookListT)
  const newBooks = booksInitial.current
  const disponibleBooks = {
    ...books,
    library: books.library?.filter((lib) => !lib.book.addedToReadingList)
  }
  const changeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newGenre = e.target.value as Genres
    if (newGenre === Genres.TODAS) {
      return setBooks(booksInitial.current)
    }
    const filteredBooks = { ...booksInitial.current }.library?.filter((lib) => {
      return lib.book.genre == newGenre
    })
    setBooks({
      ...books,
      library: filteredBooks
    })
  }

  useEffect(() => {
    setAddNewBookToReadList(!AddNewBookToReadList)
    newBooks.library?.map((lib) => {
      if (lib.book.ISBN === BookAtAdd.ISBN) {
        lib.book.addedToReadingList = !lib.book.addedToReadingList
      }
    })
    localStorage.setItem("newBooks", JSON.stringify(newBooks))
    setReadList({
      library: [
        ...newBooks.library.filter((lib) => lib.book.addedToReadingList)
      ]
    })
    setBooks({
      library: [...books.library.filter((lib) => !lib.book.addedToReadingList)]
    })
    localStorage.setItem("ReadList", JSON.stringify(ReadList))
    localStorage.setItem("books", JSON.stringify(newBooks))
    setAddNewBookToReadList(!AddNewBookToReadList)
  }, [BookAtAdd])

  return (
    <>
      <Header changeGenre={changeGenre} />
      <main className="my-4 w-full bg-red flex flex-col md:flex-row justify-between gap-8">
        <BookList
          bookList={disponibleBooks}
          setBookAtAdd={setBookAtAdd}
          numBooks={
            books.library?.filter((lib) => !lib.book.addedToReadingList)?.length
          }
        />
        <ReadListBooks
          bookList={ReadList}
          setBookAtAdd={setBookAtAdd}
          numBooks={ReadList.library?.length}
        />
      </main>
    </>
  )
}

export default App
