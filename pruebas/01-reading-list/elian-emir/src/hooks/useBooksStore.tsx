import { booksStore } from '../store/booksStore'

const useBooksStore = () => {
  const books = booksStore((state) => state.books)
  const readingList = booksStore((state) => state.readingList)
  const countBookAvalaible = booksStore((state) => state.countBookAvalaible)
  const countBookToRead = booksStore((state) => state.countBookToRead)
  const filterByGenre = booksStore((state) => state.filterByGenre)
  const addBooksToReadingList = booksStore((state) => state.addBooksToReadingList)
  const removeBookOfList = booksStore((state) => state.removeBookOfList)
  const setFilterByGenre = booksStore((state)=> state.setFilterByGenre)
  return {
    books,
    readingList,
    countBookAvalaible,
    countBookToRead,
    filterByGenre,
    addBooksToReadingList,
    removeBookOfList,
    setFilterByGenre
  }
}

export default useBooksStore