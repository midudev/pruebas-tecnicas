import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { library } from '../../../books.json'
import { ConstantsOfBooks } from '../utils/BooksConstants'

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
  isDragAndDrop: MutableRefObject<boolean>
  toReadingList: MutableRefObject<boolean>
  viewListOfBooks: string
  setViewListOfBooks: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Context = React.createContext<IContextBook | null>(null)

export const BookContextProvider = ({ children }: Props) => {
  const [books, setbooks] = useState<IBook[]>([])
  const [readingList, setReadingList] = useState<IBook[]>([])

  const [viewListOfBooks, setViewListOfBooks] = useState(
    ConstantsOfBooks.OPTIONS_VIEW_LIST[0]
  )

  const isDragAndDrop = useRef(false)
  const toReadingList = useRef(false)

  const handleStorageChange = useCallback((ev: StorageEvent) => {
    if (!ev.newValue) return
    if (ev.key === ConstantsOfBooks.STORAGE_NAMES[1])
      setReadingList(JSON.parse(ev.newValue))
    if (ev.key === ConstantsOfBooks.STORAGE_NAMES[0])
      setbooks(JSON.parse(ev.newValue))
  }, [])

  useEffect(() => {
    if (books.length === 0 && readingList.length === 0) return
    if (!isDragAndDrop.current) {
      localStorage.setItem(
        ConstantsOfBooks.STORAGE_NAMES[1],
        JSON.stringify(readingList)
      )
      localStorage.setItem(
        ConstantsOfBooks.STORAGE_NAMES[0],
        JSON.stringify(books)
      )
      return
    }
    if (!toReadingList.current) {
      localStorage.setItem(
        ConstantsOfBooks.STORAGE_NAMES[1],
        JSON.stringify(readingList)
      )
      localStorage.setItem(
        ConstantsOfBooks.STORAGE_NAMES[0],
        JSON.stringify(books)
      )
      isDragAndDrop.current = false
      return
    }
    localStorage.setItem(
      ConstantsOfBooks.STORAGE_NAMES[0],
      JSON.stringify(books)
    )
    localStorage.setItem(
      ConstantsOfBooks.STORAGE_NAMES[1],
      JSON.stringify(readingList)
    )
    toReadingList.current = false
    isDragAndDrop.current = false
  }, [books, readingList])

  const getInitialData = () => {
    const reading = localStorage.getItem(ConstantsOfBooks.STORAGE_NAMES[1])
    const books = localStorage.getItem(ConstantsOfBooks.STORAGE_NAMES[0])

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
        toReadingList,
        isDragAndDrop,
        viewListOfBooks,
        setViewListOfBooks,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
