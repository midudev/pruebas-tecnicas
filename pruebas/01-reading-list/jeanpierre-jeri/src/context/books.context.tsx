'use client'

import { Book, BookInfo } from '@/types'
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

interface BookContextState {
  books: Book[]
  lectureBooks: Book[]
  activeGenre: string
  genres: string[]
  setLectureBook: (book: BookInfo) => void
  changeGenre: (genre: string) => void
}

const BooksContext = createContext<BookContextState>({
  books: [],
  lectureBooks: [],
  activeGenre: '',
  genres: [],
  setLectureBook: () => {},
  changeGenre: () => {}
})

interface Props {
  children: React.ReactNode
  books: Book[]
}

export function BooksContextProvider({ children, books: initialBooks }: Props) {
  const books = useRef<Book[]>(initialBooks)

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [activeGenre, setActiveGenre] = useState('')

  const [lectureBooks, setLectureBooks] = useState<Book[]>([])

  const setLectureBook = (book: BookInfo) => {
    const lectureBooksFiltered = lectureBooks.filter((item) => item.book.ISBN !== book.ISBN)

    const books =
      lectureBooksFiltered.length !== lectureBooks.length
        ? lectureBooksFiltered
        : [...lectureBooks, { book }]

    const mainBooks =
      lectureBooksFiltered.length !== lectureBooks.length
        ? [...filteredBooks, { book }]
        : filteredBooks.filter((item) => item.book.ISBN !== book.ISBN)

    setFilteredBooks(mainBooks)
    setLectureBooks(books)

    localStorage.setItem('books', JSON.stringify(mainBooks))
    localStorage.setItem('lectureBooks', JSON.stringify(books))
  }

  const genres = useMemo(() => {
    return Array.from(new Set(books.current.map((book) => book.book.genre)))
  }, [books])

  const booksByCategory = useMemo(() => {
    if (activeGenre === '') return filteredBooks
    return filteredBooks.filter((book) => book.book.genre === activeGenre)
  }, [filteredBooks, activeGenre])

  useEffect(() => {
    const lectureBooks = localStorage.getItem('lectureBooks')
    const mainBooks = localStorage.getItem('books')
    setLectureBooks(lectureBooks != null ? JSON.parse(lectureBooks) : [])
    setFilteredBooks(mainBooks != null ? JSON.parse(mainBooks) : books.current)
  }, [setLectureBooks, setFilteredBooks])

  return (
    <BooksContext.Provider
      value={{
        books: booksByCategory,
        lectureBooks,
        setLectureBook,
        changeGenre: setActiveGenre,
        activeGenre,
        genres
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooksContext = () => useContext(BooksContext)
