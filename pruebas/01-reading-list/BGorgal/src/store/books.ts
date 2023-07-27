import { create } from 'zustand'

import { persist, devtools } from 'zustand/middleware'
import { BookMapped, books } from '../utils/mapLibrary'
import { findBookAndFilter } from '../utils/findBookAndFilter'
import { FilterValue, IFilters } from '../types'
import filterBooks from '../utils/filterBooks'

interface State {
  listOfBooks: BookMapped[]
  listOfBooksToRead: BookMapped[]
  bookSelected: BookMapped | null
  booksInList: number
  filters: IFilters
  genres: Array<BookMapped['genre']>
  minPages: BookMapped['numPages']
  maxPages: BookMapped['numPages']
  isModalOpen: boolean
  getBookInfo: (bookId: string) => void
  addRemoveBookToList: (bookIdToAdd: string) => void
  setFilteredBooks: () => void
  setFilters: ({
    property,
    value,
  }: {
    property: FilterValue
    value: string | string[]
  }) => void
  resetFilters: () => void
  toggleModal: () => void
}

const genres = [...new Set(books.map(book => book.genre))]
const minPages = Math.min(...books.map(book => book.numPages))
const maxPages = Math.max(...books.map(book => book.numPages))

export const initialFilters = {
  search: null,
  genres: [],
  pages: maxPages,
}

export const useBooksStore = create<State>()(
  persist(
    (set, get) => ({
      listOfBooks: books,
      listOfBooksToRead: [],
      bookSelected: null,
      booksInList: books.length,
      filters: initialFilters,
      genres,
      minPages,
      maxPages,
      isModalOpen: false,
      addRemoveBookToList: (bookId: string) => {
        const { listOfBooks, listOfBooksToRead } = get()

        // Buscar y filtrar en la lista listOfBooks
        const { bookFromList, filteredBooks: booksFilteredList } =
          findBookAndFilter(listOfBooks, bookId)

        // Buscar y filtrar en la lista listOfBooksToRead
        const {
          bookFromList: bookFromReadList,
          filteredBooks: booksFilteredReadList,
        } = findBookAndFilter(listOfBooksToRead, bookId)

        if (bookFromList != null) {
          const newBookListToRead = [...listOfBooksToRead, bookFromList]
          set({
            listOfBooks: booksFilteredList,
            listOfBooksToRead: newBookListToRead,
          })
        }

        if (bookFromReadList != null) {
          const newBookList = [...listOfBooks, bookFromReadList]
          set({
            listOfBooks: newBookList,
            listOfBooksToRead: booksFilteredReadList,
          })
        }
      },

      getBookInfo: (bookId: string) => {
        const { listOfBooks, listOfBooksToRead } = get()
        const allBooks = [...listOfBooks, ...listOfBooksToRead]

        const bookList = allBooks.find(
          book => book.bookId === bookId,
        ) as BookMapped

        if (bookList != null) {
          set({ bookSelected: bookList })
        }
      },

      setFilteredBooks: () => {
        const { filters, listOfBooksToRead } = get()
        const newBooks = books.filter(
          book => !listOfBooksToRead.some(b => b.bookId === book.bookId),
        )

        const booksfiltered = filterBooks({ listOfBooks: newBooks, filters })

        set({ listOfBooks: booksfiltered })
      },

      setFilters: ({ property, value }) => {
        const { filters } = get()

        set({ filters: { ...filters, [property]: value } })
      },

      resetFilters: () => {
        set({ filters: initialFilters })
      },

      toggleModal: () => set(state => ({ isModalOpen: !state.isModalOpen })),
    }),
    {
      partialize: state => {
        const { listOfBooksToRead } = state
        const newBooks = books.filter(
          book => !listOfBooksToRead.some(b => b.bookId === book.bookId),
        )
        return {
          listOfBooks: newBooks,
          listOfBooksToRead,
        }
      },
      name: 'listStorage',
    },
  ),
)
