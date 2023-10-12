import { create } from 'zustand'
import { BookInt, BookProps, libraryInt } from '../types/book'
import { toast } from 'react-toastify'

interface BookAddInterface {
  bookUser: libraryInt
  addBookUser: (book: BookInt) => void
  addBooksUser: () => void
  removeBookUser: (book: string) => void
}

const getDataLocalStore = (): BookProps[] => {
  const booksUser = localStorage.getItem('book-user')
  if (booksUser !== null) {
    const library = JSON.parse(booksUser)
    return library
  }
  return []
}

export const useBookUser = create<BookAddInterface>((set) => ({
  bookUser: { library: getDataLocalStore() },
  addBookUser: (book) =>
    set((state) => {
      const exist = state.bookUser.library.every(({ book: { ISBN } }) => ISBN !== book.ISBN)
      if (exist) {
        const library = [...state.bookUser.library, { book }]
        localStorage.setItem('book-user', JSON.stringify(library))
        toast.success('Se agrego el libro correctamente', { autoClose: 1000 })
        return { bookUser: { library } }
      }
      toast.error('Este libro ya esta agregado a la lista')
      return state
    }),
  addBooksUser: () =>
    set((state) => {
      const booksUser = localStorage.getItem('book-user')
      if (booksUser !== null) {
        const library = JSON.parse(booksUser)
        return { bookUser: { library } }
      }
      return state
    }),
  removeBookUser: (book) =>
    set((state) => {
      const library = [...state.bookUser.library.filter(({ book: { ISBN } }) => ISBN !== book)]
      localStorage.setItem('book-user', JSON.stringify(library))
      toast.success('Se elimino el libro correctamente', { autoClose: 1000 })
      return { bookUser: { library } }
    })
}))
