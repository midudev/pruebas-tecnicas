import type { Book, Library } from "~/interfaces"
import { parseDataStorage } from "./storage"

export const filterBooksStorageDB = (library: Library[]) => {
  const getStorage = parseDataStorage('readingList')
  const filterListBook: Library[] = []

  if (!getStorage) return {
    readingList: null,
    booksAvailable: library
  }

  library.forEach(book => {
    if (!getStorage.some((b: Book) => b.title === book.book.title))
      filterListBook.push(book)
  })

  getStorage.forEach((book: Library) => {
    const { title }: any = book
    if (!library.some(b => b.book.title === title))
      filterListBook.push(book)
  })

  return {
    readingList: getStorage,
    booksAvailable: filterListBook
  }
}
