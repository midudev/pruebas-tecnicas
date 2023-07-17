import { create } from 'zustand'
import booksJson from '../books.json'
import { BooksState } from '../types'

export const useBooksStore = create<BooksState>((set, get) => ({
  books: [],
  WantReadBooks: [],
  filterBooks: [],
  filters: {},
  getBooks: () => {
    console.log('json', booksJson.library)
    const books = booksJson.library
    // dbbooks.map(b => { b.book.wantRead = false })
    set((state) => ({ ...state, books, filterBooks: books }))

    // return books
    // return await new Promise((resolve) => resolve(dbbooks))
  },
  setBooks: (filterBooks) => {
    set((state) => ({ ...state, filterBooks }))
  },
  filter: (name: string, value: string | number) => {
    set((state) => {
      if (value !== '') {
        return { ...state, filters: { ...state.filters, [name]: value } }
      }
      return { ...state, filters: { pages: state.filters.pages } }
    })

    const filters = get().filters
    let _books = get().books

    Object.keys(filters).map((f) => {
      _books = _books.filter((d) => {
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
