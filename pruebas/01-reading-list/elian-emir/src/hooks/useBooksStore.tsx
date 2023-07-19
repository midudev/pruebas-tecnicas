import { booksStore } from '../store/booksStore'

const useBooksStore = () => {
  const books = booksStore((state) => state.books)
  const readingList = booksStore((state) => state.readingList)
  const countBookAvalaible = booksStore((state) => state.countBookAvalaible)
  const countBookToRead = booksStore((state) => state.countBookToRead)
  const addBooksToReadingList = booksStore((state) => state.addBooksToReadingList)
  const removeBookOfList = booksStore((state) => state.removeBookOfList)
  return {
    books,
    readingList,
    countBookAvalaible,
    countBookToRead,
    addBooksToReadingList,
    removeBookOfList,
  }
}

export default useBooksStore