import { Mutate, StoreApi, create } from 'zustand'
import booksJson from '../books.json'
import { Book, BooksState } from '../types'
import { persist } from 'zustand/middleware'

type StoreWithPersist = Mutate<StoreApi<BooksState>, [['zustand/persist', unknown]]>

export const withStorageDOMEvents = (store: StoreWithPersist) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && (Boolean(e.newValue))) {
      // store.persist.rehydrate()
      window.location.reload(true)
    }
  }

  window.addEventListener('storage', storageEventCallback)

  return () => {
    window.removeEventListener('storage', storageEventCallback)
  }
}

export const useBooksStore = create<any>(persist(
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
        if (value !== '') { //  && name !== 'old'
          return {
            ...state,
            filters: { ...state.filters, [name]: value, old: { dato: state.filters } }
          }
        }

        return {
          ...state,
          filters: {
            pages: state.filters.pages,
            old: { dato: state.filters[name] }
          }
        }
      })

      // finding needed base book list when filter is needed
      const filters = get().filters
      const wantReadBooks = get().wantReadBooks

      let base = get().filteredBooks

      // const prevGenre = filters.old.dato.genre
      const nextGenre = filters.genre
      const prevPages = filters.old.dato.pages
      const nextPages = filters.pages
      delete filters.old

      // no genre + want books
      // genre + want books + to/from > or < page
      if (
        (filters.genre === undefined && wantReadBooks.length > 0) ||
        (filters.genre && wantReadBooks.length > 0 && prevPages > nextPages || prevPages < nextPages)) {
        console.log('filter want books')
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

      // no genre + no want books + to "Todos los generos"
      // genre + no want books
      else if (
        (filters.genre === undefined && wantReadBooks.length === 0 && nextGenre === undefined) ||
        // (filters.genre && wantReadBooks.length > 0 && prevPages > nextPages || prevPages < nextPages) ||
        (filters.genre && wantReadBooks.length === 0)) {
        base = get().books
        console.log('vuelta a todos los books sin want books', base)
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
