import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useLectureList = create(persist((set,get) => ({
  booksInList: [],
  books: [],
  setBooks: (books) => set({books: books}),
  addBookToList: (book) => {
    // add book to list
    const newList = [...get().booksInList, book]
    set({booksInList: newList})
    // remove book from books
    const newBooks = get().books.filter((b) => b.ISBN !== book.ISBN)
    set({books: newBooks})
    
  },
  removeBookFromList: (book) => {
    // remove book from list
    const newList = get().booksInList.filter((b) => b.ISBN !== book.ISBN)
    set({booksInList: newList})
    
    // add book to books
    const newBooks = [...get().books, book]
    set({books: newBooks})
  },
  clearBooks: () => set({books: []}),
  clearBooksInList: () => set({booksInList: []}),

  alreadyAdded: (book) => {
    return useLectureList.getState().books.filter((b) => b.ISBN === book.ISBN).length > 0
  }
}),{
  name: 'lecture-list-storage'
}))

