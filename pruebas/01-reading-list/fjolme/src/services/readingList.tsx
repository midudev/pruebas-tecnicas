import { saveReadingList } from '../storage/readingList'
import { Book } from '../types/types'

export const addBookToReadingList = (books: Book[], book: Book) => {
  if (books.includes(book)) {
    return books
  }
  const newBooks = [...books, book]
  saveReadingList(newBooks)
  return newBooks
}

export const removeBookFromReadingList = (books: Book[], book: Book) => {
  const index = books.indexOf(book)
  if (index === -1) {
    return books
  }
  const newBooks = [...books]
  newBooks.splice(index, 1)
  saveReadingList(newBooks)
  return newBooks
}
