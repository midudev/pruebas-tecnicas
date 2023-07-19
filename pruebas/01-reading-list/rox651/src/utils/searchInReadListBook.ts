import { LibraryElement } from '../types'

export const searchInReadListBook = (readlist: LibraryElement[], searchBook: LibraryElement) => {
  const isInReadList = readlist.some((readlistBook) => readlistBook.book.title === searchBook.book.title)

  return { isInReadList }
}
