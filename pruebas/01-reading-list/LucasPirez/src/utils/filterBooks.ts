import { Library } from '../getBooks'
import { getStorageReadingList } from '../localStorage/readingList'

export function filterInReadingList(books: Library[]): Library[] {
  const list = getStorageReadingList()
  const arr = books.filter((book) => list.includes(book.book.ISBN))

  return arr
}

export function filterOutReadingList(books: Library[]): Library[] {
  const list = getStorageReadingList()
  const arr = books.filter((book) => !list.includes(book.book.ISBN))

  return arr
}
