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
  search: string
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const BookContext = createContext<BookTypeContext>({
  books: [],
  readingList: [],
  addReadingList: () => {},
  removeReadingList: () => {},
  genre: '',
  setGenre: () => {},
  filteredUniqueGenre: [],
  search: '',
  onChangeSearch: () => '',
  handleSubmit: () => ''
})

export function BooksProvider ({ children }: React.PropsWithChildren) {
  const { library } = getAllBook()
  const initialBooks = library.map(collection => collection.book)

  const [books, setBooks] = useLocalStorage<Book[]>('BooksList', initialBooks)
  const [readingList, setReadingList] = useLocalStorage<Book[]>('ReadingList', [])
  const [genre, setGenre] = useState<string>('Todos')
  const [search, setSearch] = useState<string>('')

  // filtered unique genre
  const genreMapped = books.map(el => el.genre)
  const filteredUniqueGenre = ['Todos', ...new Set(genreMapped)]

  // add to read list
  const addReadingList = (book: Book) => {
    const addBook = books.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setBooks(addBook)
    setReadingList([...readingList, book])
  }

  // delete from read list
  const removeReadingList = (book: Book) => {
    const delBook = readingList.filter(bookReadingList => bookReadingList.ISBN !== book.ISBN)
    setBooks([book, ...books])
    setReadingList([...delBook])
  }

  const filterBooks = books.filter(book => {
    let genreMatch = true
    if (genre !== 'Todos') {
      genreMatch = book.genre === genre
    }
    let searchMatch = true
    if (search !== '') {
      searchMatch = book.title.toLowerCase().includes(search.toLowerCase())
    }
    return genreMatch && searchMatch
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  function onChangeSearch (e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    if (newValue.startsWith(' ')) return
    setSearch(newValue)
  }

  return (
    <BookContext.Provider
      value={{
        books: filterBooks,
        readingList,
        addReadingList,
        removeReadingList,
        genre,
        setGenre,
        filteredUniqueGenre,
        handleSubmit,
        search,
        onChangeSearch
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBooksContext = () => useContext(BookContext)
