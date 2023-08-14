import { Book } from '../types/types'

const ISBNS_KEY = 'isbns'

export const saveReadingList = (books: Book[]) => {
  const isbns = books.map(book => book.ISBN)
  localStorage.setItem(ISBNS_KEY, JSON.stringify(isbns))
}

export const getReadingListFromStorage = (books: Book[]) => {
  const isbns = localStorage.getItem(ISBNS_KEY)
  return getReadingListFromIsbns(books, isbns)
}

export const getReadingListFromStorageEvent = (books: Book[], event: StorageEvent) => {
  if (event.key === ISBNS_KEY) {
    const isbns = event.newValue
    return getReadingListFromIsbns(books, isbns)
  }
}

const getReadingListFromIsbns = (books: Book[], isbns: string | null) => {
  if (isbns === null) {
    return []
  }
  // TODO respect the order of the localstorage and not the order of the books
  const isbnsList: string[] = JSON.parse(isbns)
  return books.filter(book => isbnsList.includes(book.ISBN))
}
