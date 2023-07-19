import { create } from 'zustand'

interface IBookStore {
    bookList: IReadingListBook[],
    initializeBooklist: (bookList: IReadingListBook[]) => void,
    moveBookToReadingList: (isbn:IReadingListBook['ISBN'])=> void,
    removeBookFromReadingList: (isbn:IReadingListBook['ISBN'])=> void,
}

const updateReadingListByISBN = (state: IBookStore, isbn:IReadingListBook['ISBN'], value: IReadingListBook['isInReadingList']) =>
  state.bookList.map(book => book.ISBN === isbn
    ? { ...book, isInReadingList: true }
    : book
  )

export const useBookStore = create<IBookStore>()(set => ({
  bookList: [],
  initializeBooklist: (bookList: IReadingListBook[]) => {
    set(state => ({ ...state, bookList }))
  },
  moveBookToReadingList: (isbn: IReadingListBook['ISBN']) => {
    set(state => ({
      ...state,
      bookList: updateReadingListByISBN(state, isbn, true)
    }))
  },
  removeBookFromReadingList: (isbn : IReadingListBook['ISBN']) => {
    set(state => ({
      ...state,
      bookList: updateReadingListByISBN(state, isbn, false)
    }))
  }
}))
