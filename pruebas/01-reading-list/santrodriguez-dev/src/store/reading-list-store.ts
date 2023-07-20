import { create } from 'zustand'
import { type Book } from '../types'
import { getSyncedFromLS, updateLocalStorage } from '../services/books'
import { persist, devtools } from 'zustand/middleware'

interface State {
  books: Book[]
  genres: string[]
  readingList: Book[]
  readingListQuantity: number
  addBook: (isbnBook: string) => void
  removeBook: (isbnBook: string) => void
  syncState: () => void
}

const { readingList, books, readingListQuantity } = getSyncedFromLS()

const getGenres = (allBooks: Book[]) => {
  const allGenres = allBooks.map(book => book.genre)
  const genres = new Set(allGenres)
  return [...genres]
}

export const useReadingListStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          genres: getGenres(books),
          books,
          readingList,
          readingListQuantity,
          addBook: (isbnBook) => {
            const { books, readingList, readingListQuantity } = get()
            const isAdded = readingList.findIndex(book => book.ISBN === isbnBook)
            if (isAdded > -1) return

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const bookIndex = books.findIndex(book => book.ISBN === isbnBook)!
            const newBook: Book = structuredClone({ ...books[bookIndex], isSelected: true })
            const newReadingList = [...readingList, newBook]
            set({
              readingList: newReadingList,
              books: [
                ...books.slice(0, bookIndex),
                { ...books[bookIndex], isSelected: true },
                ...books.slice(bookIndex + 1)
              ],
              readingListQuantity: readingListQuantity + 1
            }, false, 'ADD_BOOK')
            updateLocalStorage(newReadingList)
          },
          removeBook: (isbnBook) => {
            const { readingList, books, readingListQuantity } = get()
            const bookIndex = books.findIndex(book => book.ISBN === isbnBook)
            if (bookIndex === -1) return
            const newReadingList = readingList.filter(book => book.ISBN !== isbnBook)
            set({
              readingList: newReadingList,
              books: [
                ...books.slice(0, bookIndex),
                { ...books[bookIndex], isSelected: false },
                ...books.slice(bookIndex + 1)
              ],
              readingListQuantity: readingListQuantity - 1
            }, false, 'REMOVE_BOOK')
            updateLocalStorage(newReadingList)
          },
          syncState: () => {
            const { readingList, books, readingListQuantity } = getSyncedFromLS()
            set({ readingList, books, readingListQuantity }, false, 'SYNC_STATE')
          }
        }
      }, { name: 'reading-list-storage' }
    )
  )
)
