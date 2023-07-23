import useLocalStorage from './useLocalStorage'
import BooksJSON from '../database/books.json'

export default function useBooksList () {
  const [availableBooks, setAvailableBooks] = useLocalStorage('availableBooks', BooksJSON.library.map(bookObj => bookObj.book))
  const [readingList, setReadingList] = useLocalStorage('readingList', [])

  const addToAvailables = (book) => setAvailableBooks(availableBooks.toSpliced(availableBooks.length, 1, book))

  const removeFromAvailables = (book) => setAvailableBooks(availableBooks.filter(item => item !== book))

  const addToReadingList = (book) => setReadingList(readingList.toSpliced(readingList.length, 1, book))

  const removeFromReadingList = book => setReadingList(readingList.filter(item => item !== book))
  return {
    availableBooks,
    setAvailableBooks,
    addToAvailables,
    removeFromAvailables,
    readingList,
    setReadingList,
    addToReadingList,
    removeFromReadingList
  }
}
