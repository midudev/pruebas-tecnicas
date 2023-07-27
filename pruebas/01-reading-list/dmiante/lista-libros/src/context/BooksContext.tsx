import { useState, createContext, useContext } from 'react'
import type { Book } from '../types/types.d.ts'
import { getAllBook } from '../services/data'
import useLocalStorage from '../hooks/useLocalStorage.ts'

interface BookTypeContext {
  books: Book[]
  readingList: Book[]
  addReadingList: (book: Book) => void
  removeReadingList: (book: Book) => void
  genre: string
  setGenre: (genre: string) => void
  filteredUniqueGenre: string[]
}

const BookContext = createContext<BookTypeContext>({
  books: [],
  readingList: [],
  addReadingList: () => {},
  removeReadingList: () => {},
  genre: '',
  setGenre: () => {},
  filteredUniqueGenre: []
})

export function BooksProvider ({ children }: React.PropsWithChildren) {
  const { library } = getAllBook()
  const initialBooks = library.map(collection => collection.book)

  const [books, setBooks] = useLocalStorage<Book[]>('BooksList', initialBooks)
  const [readingList, setReadingList] = useLocalStorage<Book[]>('ReadingList', [])
  const [genre, setGenre] = useState<string>('Todos')

  const genreMapped = books.map(el => el.genre)
  const filteredUniqueGenre = ['Todos', ...new Set(genreMapped)]

  const addReadingList = (book: Book) => {
    const addBook = books.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setBooks(addBook)
    setReadingList([...readingList, book])
  }

  const removeReadingList = (book: Book) => {
    const delBook = readingList.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setBooks([book, ...books])
    setReadingList([...delBook])
  }

  const filteredBookByGenre =
    genre !== 'Todos'
      ? books.filter(filterBooks => filterBooks.genre === genre)
      : books

  return (
    <BookContext.Provider
      value={{
        books: filteredBookByGenre,
        readingList,
        addReadingList,
        removeReadingList,
        genre,
        setGenre,
        filteredUniqueGenre
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBooksContext = () => useContext(BookContext)
