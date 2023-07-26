import React, { useEffect, useState } from 'react'
import { library } from '../../../books.json'
import { IBook } from '../interfaces/IBooks'

export interface IContextBook {
  books: IBook[]
  readingList: IBook[]
  saveBook: (book: IBook) => void
  saveReadingList: (book: IBook) => void
  deleteBook: (book: IBook) => void
  deleteReadingList: (book: IBook) => void
  replaceBooks: (books: IBook[]) => void
  replaceReadingList: (books: IBook[]) => void
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Context = React.createContext<IContextBook | null>(null)

export const BookContextProvider = ({ children }: Props) => {
  const [books, setbooks] = useState<IBook[]>([])
  const [readingList, setReadingList] = useState<IBook[]>([])

  const handleStorageChange = (ev: StorageEvent) => {
    if (!ev.newValue) return
    if (ev.key === 'readingList') setReadingList(JSON.parse(ev.newValue))
    if (ev.key === 'books') setbooks(JSON.parse(ev.newValue))
  }

  useEffect(() => {
    if (books.length === 0 && readingList.length === 0) return
    localStorage.setItem('books', JSON.stringify(books))
    localStorage.setItem('readingList', JSON.stringify(readingList))
  }, [books, readingList])

  const getInitialData = () => {
    const reading = localStorage.getItem('readingList')
    const books = localStorage.getItem('books')

    if (!reading || !books) {
      setReadingList([])
      setbooks(library)
      return
    }

    const readingparse = JSON.parse(reading)
    if (readingparse.length >= 0) {
      setReadingList(readingparse)
    } else setReadingList([])

    const booksparse = JSON.parse(books)
    if (booksparse.length >= 0) {
      setbooks(booksparse)
    } else setbooks(library)
  }

  useEffect(() => {
    window.addEventListener('storage', (ev) => handleStorageChange(ev))
    getInitialData()

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const saveBook = (book: IBook) => {
    setbooks((prev) => [book, ...prev])
  }

  const deleteBook = ({ book }: IBook) => {
    setbooks(
      books.filter((auxBook) => {
        return auxBook.book.title !== book.title
      })
    )
  }

  const saveReadingList = (book: IBook) => {
    setReadingList((prev) => [book, ...prev])
  }

  const deleteReadingList = ({ book }: IBook) => {
    setReadingList(
      readingList.filter((auxBook) => {
        return auxBook.book.title !== book.title
      })
    )
  }

  const replaceBooks = (booksAux: IBook[]) => {
    setbooks(booksAux)
  }

  const replaceReadingList = (booksAux: IBook[]) => {
    setReadingList(booksAux)
  }

  return (
    <Context.Provider
      value={{
        books,
        saveBook,
        deleteBook,
        readingList,
        saveReadingList,
        deleteReadingList,
        replaceBooks,
        replaceReadingList,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
