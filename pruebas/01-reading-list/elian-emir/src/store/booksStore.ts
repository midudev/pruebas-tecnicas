import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {type BooksState } from '../types'
import { fetchBooksData } from '../utils/fetch'
import { withStorageDOMEvents } from '../utils/helpers'



const mappedBooks = fetchBooksData()
export const booksStore = create<BooksState>()(
  persist(
    (set, get) => {
      return {
        books: mappedBooks,
        readingList: [],
        countBookAvalaible: mappedBooks.length,
        countBookToRead: 0,
        addBooksToReadingList: (isbn) => {
          const { books } = get()
          const bookToAdd = books.find((b) => b.ISBN === isbn)
          if (bookToAdd) {
            set((state) => ({
              readingList: [...state.readingList, bookToAdd],
              countBookAvalaible:
                state.countBookAvalaible > 0 ? state.countBookAvalaible - 1 : 0,
              countBookToRead: state.countBookToRead + 1
            }))
          }
        },
        removeBookOfList: (isbn) => {
          const { readingList } = get()
          const remanentList = readingList.filter((b) => b.ISBN !== isbn)
          set((state) => ({
            readingList: remanentList,
            countBookAvalaible: state.countBookAvalaible + 1,
            countBookToRead: state.countBookToRead - 1
          }))
        }
      }
    },
    {
      name: 'books-storage',
      
    }
  )
)
withStorageDOMEvents(booksStore)