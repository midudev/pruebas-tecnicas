import { Mutate, StoreApi, create } from 'zustand'
import booksJson from '../books.json'
import { Book, BooksState } from '../types'
import { persist } from 'zustand/middleware'

type StoreWithPersist = Mutate<StoreApi<BooksState>, [['zustand/persist', BooksState]]>

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && (Boolean(e.newValue))) {
      store.persist.rehydrate()
      // window.location.reload(true)
    }
  }

  window.addEventListener('storage', storageEventCallback)

  return () => {
    window.removeEventListener('storage', storageEventCallback)
  }
}

export const useBooksStore = create<BooksState>()(persist(
  (set, get) => ({
    books: [],
    filteredBooks: [],
    wantReadBooks: [],
    filters: {},
    getBooks: () => {
      const books = booksJson.library
      set((state) => ({ ...state, books, filteredBooks: books }))
    },
    setBooks: (filteredBooks) => {
      set((state) => ({ ...state, filteredBooks }))
    },
    setWantReadBooks: (wantReadBook: Book) => {
      set((state) => {
        return { ...state, wantReadBooks: [...state.wantReadBooks, wantReadBook] }
      })
    },
    filter: (name: string, value: string | number) => {
      // set filters
      set((state) => {
        if (value !== '') {
          return {
            ...state,
            filters: { ...state.filters, [name]: value }
          }
        }

        return {
          ...state,
          filters: {
            pages: state.filters.pages
          }
        }
      })

      const filters = get().filters
      const wantReadBooks = get().wantReadBooks
      let base = get().filteredBooks

      // exclude want books using it has base filter
      if (wantReadBooks.length > 0) {
        const books = get().books

        const excludeIsbn = wantReadBooks.map(w => w.book.ISBN)
        const excludeWantReadBooks = books.filter((b) => {
          // console.log('isbn', b.book.ISBN)
          if (excludeIsbn.includes(b.book.ISBN)) {
            return false
          }
          return true
        })
        base = excludeWantReadBooks
      }

      // no genre or has genre, filter base from all books
      else if (filters.genre === undefined || filters.genre) {
        base = get().books
      }

      console.log('filters', filters)

      // filter using filters properties
      Object.keys(filters).map((f) => {
        base = base.filter((d) => {
          if (f === 'pages') {
            return filters[f] > 0 ? d.book[f] <= filters[f] : true
          } else {
            // genre
            return d.book[f] === filters[f]
          }
        })

        get().setBooks(base)
      })
    }
  }),
  {
    name: 'booksLibrary',
    getStorage: () => localStorage
  }))

withStorageDOMEvents(useBooksStore)
