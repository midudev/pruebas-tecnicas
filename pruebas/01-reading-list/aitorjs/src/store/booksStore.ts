import { create } from 'zustand'
import booksJson from '../books.json'
import { Book, BooksState } from '../types'
import { persist } from 'zustand/middleware'

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
          return { ...state, filters: { ...state.filters, [name]: value, old: { dato: state.filters } } }
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
      if (filters.genre === undefined && wantReadBooks.length > 0) {
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
        // return get().setBooks(excludeWantReadBooks)
      }

      // no genre + no want books + to "Todos los generos"
      // genre + want books + to/from > or < page
      // genre + no want books
      else if (
        (filters.genre === undefined && wantReadBooks.length === 0 && nextGenre === undefined) ||
        (filters.genre && wantReadBooks.length > 0 && prevPages > nextPages || prevPages < nextPages) ||
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

/*  filterGenre: (genre: string) => {
  set((state) => {
    console.log('a', state)
    return ({ ...state, _filters: { ...state._filters, genre } })
  })

  const filtered = get().books.filter((d) => {
    return d.book.genre === genre
  })

  console.log('filtered', filtered)
  get().setBooks(filtered)
},

filterPages: (pages: number) => {
  set((state) => {
    // console.log('a', state)
    return ({ ...state, _filters: { ...state._filters, pages } })
  })
  console.log('BOOKS', get().books, pages)
  const filtered = get().books.filter((d) => {
    return d.book.pages <= pages
  })

  console.log('filtered2', filtered)
  get().setBooks(filtered)
} */
