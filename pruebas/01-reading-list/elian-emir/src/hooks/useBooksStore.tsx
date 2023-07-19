import { booksStore } from '../store/booksStore'

const useBooksStore = () => {
  const books = booksStore((state) => state.books)
  const addBooksToReadingList = booksStore((state) => state.addBooksToReadingList)
  const readingList = booksStore((state) => state.readingList)
  const removeBookOfList = booksStore((state) => state.removeBookOfList)
  const countBookAvalaible = booksStore((state) => state.countBookAvalaible)
  const countBookToRead = booksStore((state) => state.countBookToRead)
  
  return {
    books,
    readingList,
    countBookAvalaible,
    countBookToRead,
    addBooksToReadingList,
    removeBookOfList
  }
}

export default useBooksStore