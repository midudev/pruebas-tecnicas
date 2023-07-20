import { useState, createContext, useEffect } from 'react'
import type { Book } from '../types/types.d.ts'
import { getAllBook } from '../services/data'

interface BookTypeContext {
  books: Book[]
  readingList: Book[]
  addReadingList: (book: Book) => void
  removeReadingList: (book: Book) => void
}

export const BookContext = createContext<BookTypeContext>({
  books: [],
  readingList: [],
  addReadingList: () => {},
  removeReadingList: () => {}
})

export function BooksProvider ({ children }: React.PropsWithChildren) {
  const [books, setBooks] = useState<Book[]>([])
  const [readingList, setReadingList] = useState<Book[]>([])

  const addReadingList = (book: Book) => {
    const bookFind = books.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setBooks(bookFind)
    setReadingList([...readingList, book])
  }

  const removeReadingList = (book: Book) => {
    const bookDel = readingList.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setReadingList([...bookDel])
    setBooks([...books, book])
  }

  useEffect(() => {
    const { library } = getAllBook()
    setBooks(library.map(collection => collection.book))
  }, [])

  return (
    <BookContext.Provider
      value={{
        books,
        readingList,
        addReadingList,
        removeReadingList
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
