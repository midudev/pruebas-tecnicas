import React, { createContext, useEffect, useState } from "react"
import { fetchLibrary } from "../services/fetchLibrary"
import { Book } from "../types/data"

export const booksContext = createContext<{
  books: Book[]
  loading: boolean
  genres: string[]
  maxPages: number
  addBooks: (books: Book[]) => void
  getBooksReading: () => Book[]
  changeBookReadingStatus: (isbn: string, reading: boolean) => void
  getBookByIsbn: (isbn: string) => Book | undefined
}>({
  loading: false,
  books: [],
  genres: [],
  maxPages: 0,
  addBooks: () => {},
  getBookByIsbn: () => undefined,
  getBooksReading: () => [],
  changeBookReadingStatus: () => {},
})

export const BooksContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [genres, setGenres] = useState<string[]>([])
  const [maxPages, setMaxPages] = useState<number>(0)

  const initialSetting = async () => {
    let booksTem: Book[] = []
    setLoading(() => true)
    if (localStorage.getItem("books") !== null) {
      booksTem = JSON.parse(await localStorage.getItem("books")!)
      addBooks(booksTem)
    } else {
      await fetchLibrary().then(data => {
        for (let i = 0; i < data.library.length; i++) {
          data.library[i].book.reading = false
          booksTem.push(data.library[i].book)
        }
        localStorage.setItem("books", JSON.stringify(booksTem))

        addBooks(booksTem)
      })
    }
    setLoading(() => false)
  }

  useEffect(() => {
    initialSetting()
  }, [])

  const addBooks = (books: Book[]) => {
    setBooks(() => books)
    let tempGenres = books.map(item => item.genre)
    let pages = books.map(item => item.pages)

    setMaxPages(() => Math.max(...pages))

    setGenres(() =>
      tempGenres.filter((genre, index) => {
        return tempGenres?.indexOf(genre) === index
      }),
    )
  }

  const getBooksReading = () => {
    return books.filter(item => item.reading === true)
  }

  const getBookByIsbn = (isbn: string): Book | undefined => {
    const result = books.find(item => item.ISBN === isbn)
    return result
  }

  const changeBookReadingStatus = (isbn: string, reading: boolean): void => {
    const result = books.map(item => {
      if (item.ISBN === isbn) {
        item.reading = reading
      }
      return item
    })
    localStorage.setItem("books", JSON.stringify(result))
    setBooks(result)
  }

  return (
    <booksContext.Provider
      value={{
        loading: loading,
        addBooks: addBooks,
        books: books,
        genres: genres,
        maxPages: maxPages,
        getBookByIsbn: getBookByIsbn,
        changeBookReadingStatus: changeBookReadingStatus,
        getBooksReading: getBooksReading,
      }}
    >
      {children}
    </booksContext.Provider>
  )
}
