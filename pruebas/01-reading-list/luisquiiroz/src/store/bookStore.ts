import { create } from 'zustand'
import { formattedBooks } from '../utils/booksData'
import { BookType } from '../types/types'
import { getBooksFromLocalStorage, getReadingListFromLocalStorage, saveToLocalStorage } from '../utils/storage'

interface BookStore {
  books: BookType[]
  readingList: BookType[]
  genre: string
  pages: string
  addBookToReadingList: (book: BookType) => void
  RemoveBookToReadingList: (book: BookType) => void
  selectPages: (value: string) => void
  selectGenre: (value: string) => void
  updateBooks: (books: BookType[]) => void
  updateReadingList: (books: BookType[]) => void
}

export const useBookStore = create<BookStore>((set, get) => ({
  books: getBooksFromLocalStorage.length === 0 ? formattedBooks : getBooksFromLocalStorage,
  readingList: getReadingListFromLocalStorage,
  genre: '',
  pages: '',
  addBookToReadingList: (bookToReadingList) => {
    const { books, readingList } = get()

    if (readingList.some(book => book.isbn === bookToReadingList.isbn)) return

    const uptatedBook: BookType = { ...bookToReadingList, reading: true }
    const markedBooks = books.map(book => book.isbn === bookToReadingList.isbn ? uptatedBook : book)
    const newReadingList = [...readingList, uptatedBook]
    set(state => ({
      ...state,
      books: markedBooks,
      readingList: newReadingList
    }))
    saveToLocalStorage({ books: markedBooks, readingList: newReadingList })
  },
  RemoveBookToReadingList: (bookToRemove) => {
    const { books, readingList } = get()

    if (!readingList.some(book => book.isbn === bookToRemove.isbn)) return

    const updatedBook = { ...bookToRemove, reading: false }
    const unmarkedBooks = books.map(book => book.isbn === bookToRemove.isbn ? updatedBook : book)
    const newReadingList = readingList.filter(book => book.isbn !== updatedBook.isbn)
    set(state => ({
      ...state,
      books: unmarkedBooks,
      readingList: newReadingList
    }))
    saveToLocalStorage({ books: unmarkedBooks, readingList: newReadingList })
  },
  selectPages: (value) => set(state => ({ ...state, pages: value })),
  selectGenre: (value) => set(state => ({ ...state, genre: value })),
  updateBooks: (books) => set(state => ({ ...state, books })),
  updateReadingList: (readingList) => set(state => ({ ...state, readingList }))

}))
