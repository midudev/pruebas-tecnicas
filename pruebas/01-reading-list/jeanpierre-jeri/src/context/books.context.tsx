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

  const [filteredBooks, setFilteredBooks] = useState<Book[]>(initialBooks)
  const [activeGenre, setActiveGenre] = useState('')

  const [lectureBooks, setLectureBooks] = useState<Book[]>([])

  const setLectureBook = (book: BookInfo) => {
    const lectureBooksFiltered = lectureBooks.filter((item) => item.book.ISBN !== book.ISBN)

    const books =
      lectureBooksFiltered.length !== lectureBooks.length
        ? lectureBooksFiltered
        : [...lectureBooks, { book }]

    setLectureBooks(books)

    localStorage.setItem('lectureBooks', JSON.stringify(books))
  }

  const changeGenre = (genre: string) => {
    setActiveGenre(genre)
    genre === ''
      ? setFilteredBooks(books.current)
      : setFilteredBooks(() => books.current.filter((book) => book.book.genre === genre))
  }

  const genres = useMemo(() => {
    return Array.from(new Set(books.current.map((book) => book.book.genre)))
  }, [books])

  useEffect(() => {
    const lectureBooks = localStorage.getItem('lectureBooks')
    setLectureBooks(lectureBooks != null ? JSON.parse(lectureBooks) : [])
  }, [setLectureBooks])

  return (
    <BooksContext.Provider
      value={{
        books: filteredBooks,
        lectureBooks,
        setLectureBook,
        changeGenre,
        activeGenre,
        genres
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooksContext = () => useContext(BooksContext)
