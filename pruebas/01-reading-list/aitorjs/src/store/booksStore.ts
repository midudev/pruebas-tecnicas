import { create } from 'zustand'
import booksJson from '../books.json'
import { Book, BooksState } from '../types'

export const useBooksStore = create<BooksState>((set, get) => ({
  books: [],
  filterBooks: [], // filteredBooks
  wantReadBooks: [],
  filters: {},
  getBooks: () => {
    const books = booksJson.library

    set((state) => ({ ...state, books, filterBooks: books }))
  },
  setBooks: (filterBooks) => {
    set((state) => ({ ...state, filterBooks }))
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
        return { ...state, filters: { ...state.filters, [name]: value } }
      }

      return { ...state, filters: { pages: state.filters.pages } }
    })

    // finding needed base book list when filter is needed
    const filters = get().filters
    const wantReadBooks = get().wantReadBooks

    let base = get().filterBooks

    if (filters.genre === undefined && wantReadBooks.length > 0) {
      const books = get().books

      const excludeIsbn = wantReadBooks.map(w => w.book.ISBN)
      const excludeWantReadBooks = books.filter((b) => {
        console.log('isbn', b.book.ISBN)
        if (excludeIsbn.includes(b.book.ISBN) === true) {
          return false
        }
        return true
      })
      base = excludeWantReadBooks
      // return get().setBooks(excludeWantReadBooks)
    }

    if (filters.genre === undefined && wantReadBooks.length === 0) {
      base = get().books
      console.log('es undefined', base)

      // return get().setBooks(base)
    }

    // filter using filters properties
    Object.keys(filters).map((f) => {
      const _books = base.filter((d) => {
        // console.log('BOOKS', base)
        if (f === 'pages') {
          return filters[f] > 0 ? d.book[f] <= filters[f] : true
        } else {
          // genre
          return d.book[f] === filters[f]
        }
      })
      get().setBooks(_books)
    })
  }
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
