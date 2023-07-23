import { serializedBooks } from '@utils/serialized-books'
import { useLocalStorage } from '@hooks/use-local-storage'
import { booksContext as BooksContext } from './constants'

export function BooksProvider ({ children }) {
  const {
    localState: books,
    saveLocalStorage: saveLocalStorageBook,
    updateLocalState: updateBooksState,
    syncStateFromLocalStorage: syncBooksState,
    getLocalStorageValue: getLocalStorageBooks
  } = useLocalStorage({
    nameStorage: '__BOOKS__',
    initialValue: serializedBooks()
  })
  const {
    localState: readingList,
    saveLocalStorage: saveLocalStorageReadingList
  } = useLocalStorage({ nameStorage: '__READING__LIST__', initialValue: [] })

  const addBookToReadingList = ({ bookId }) => {
    const book = getLocalStorageBooks().find((book) => book.ISBN === bookId)
    const newStateBooks = getLocalStorageBooks().map((book) => {
      if (book.ISBN === bookId) {
        return { ...book, isAdded: true }
      }
      return book
    })
    saveLocalStorageBook({ value: newStateBooks })
    saveLocalStorageReadingList({ value: [...readingList, book] })
  }

  const removeBookToReadingList = ({ bookId }) => {
    const newReadingList = readingList.filter((book) => book.ISBN !== bookId)
    const newStateBooks = getLocalStorageBooks().map((book) => {
      if (book.ISBN === bookId) {
        return { ...book, isAdded: false }
      }
      return book
    })
    saveLocalStorageBook({ value: newStateBooks })
    saveLocalStorageReadingList({ value: newReadingList })
  }

  const filterBooksByGenre = ({ genre }) => {
    if (!genre) return
    if (genre === 'all') return syncBooksState()
    const filteredBooks = getLocalStorageBooks().filter((book) => {
      return book.genre === genre
    })
    updateBooksState({ value: filteredBooks })
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        readingList,
        addBookToReadingList,
        removeBookToReadingList,
        filterBooksByGenre,
        getLocalStorageBooks
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
