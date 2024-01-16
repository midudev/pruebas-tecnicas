import { type StateCreator } from 'zustand'
import type { Book as BookType } from '../type'
import { type FiltersSlice } from './filters-slice'
import { getBooks } from '../services/getBooks'

export interface BooksSlice {
  availableBooks: BookType[]
  booksFetchResult: { isLoading: boolean, isError: boolean }
  booksInList: BookType[]
  isReadingListMounted: boolean
  isReadingListDisplayed: boolean
  fetchBooks: () => void
  addBookToList: (bookToAdd: BookType) => void
  removeBookFromList: (ISBN: string) => void
  hideReadingList: () => void
  displayReadingList: () => void
}

export const createBooksSlice: StateCreator<FiltersSlice & BooksSlice, [], [], BooksSlice> = (set) => ({
  availableBooks: [],
  booksFetchResult: { isLoading: true, isError: false },
  booksInList: [],
  isReadingListMounted: false,
  isReadingListDisplayed: false,
  fetchBooks: () => {
    set((state) => ({
      booksFetchResult: { ...state.booksFetchResult, isLoading: true }
    }))

    getBooks().then(books => {
      set(() => ({ availableBooks: books }))
    }).catch((e) => {
      set((state) => ({ booksFetchResult: { ...state.booksFetchResult, isError: true } }))
      throw e
    }).finally(() => {
      set((state) => ({ booksFetchResult: { ...state.booksFetchResult, isLoading: false } }))
    })
  },
  addBookToList: (bookToAdd: BookType) => {
    set((state) => ({ booksInList: [...state.booksInList, bookToAdd] }))
  },
  removeBookFromList: (ISBN: string) => {
    set((state) => {
      return ({ booksInList: state.booksInList.filter(book => book.ISBN !== ISBN) })
    })
  },
  hideReadingList: () => {
    set(() => ({ isReadingListDisplayed: false }))
  },
  displayReadingList: () => {
    set(state => {
      if (!state.isReadingListDisplayed) {
        return {
          isReadingListMounted: !state.isReadingListMounted,
          isReadingListDisplayed: true
        }
      }

      return {
        isReadingListMounted: !state.isReadingListMounted
      }
    })
  }

})
