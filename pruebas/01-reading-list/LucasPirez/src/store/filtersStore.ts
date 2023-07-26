import { create } from 'zustand'
import { Library } from '../getBooks'

export type FiltersTypes = 'pages' | 'genre'
export type AboutTypes = 'title' | 'author'
export type SetSeachType = { value?: string; about?: AboutTypes }

interface FiltersBooks {
  books: Library[]
  booksFilters: Library[]
  searchState: { value?: string; about?: AboutTypes }
  filters: { pages: null | number; genre: null | string }
  setInitialFilterState: (books: Library[]) => void
  setFilters: (tipo: FiltersTypes, value: string | number | null) => void
  setFilterBooks: () => void
  setRemoveAllFilters: () => void
  setSearchState: (value: SetSeachType) => void
}

export const useFiltersStore = create<FiltersBooks>((set) => ({
  books: [],
  booksFilters: [],
  searchState: { value: '', about: 'title' },
  filters: { pages: null, genre: null },
  filterGenre: null,
  filterPages: null,

  setInitialFilterState: (books) =>
    set(() => ({
      books: books,
      booksFilters: books
    })),

  setFilters: (tipo, value) =>
    set((state) => ({
      filters: { ...state.filters, [tipo]: value }
    })),

  setFilterBooks: () =>
    set((state) => {
      const filtrado = state.books.filter((book) => {
        const { genre, pages, author, title } = book.book
        const { filters } = state
        const { value, about } = state.searchState

        if (filters?.genre && genre !== filters.genre) return false

        if (filters?.pages && pages > filters.pages) return false

        if (value?.length && about) {
          if (
            about === 'author' &&
            !author.name.toLowerCase().includes(value.toLowerCase())
          ) {
            return false
          }

          if (
            about === 'title' &&
            !title.toLowerCase().includes(value.toLowerCase())
          ) {
            return false
          }
        }
        return true
      })

      return {
        booksFilters: filtrado
      }
    }),

  setRemoveAllFilters: () => {
    return set((state) => {
      return {
        booksFilters: state.books,
        filters: { genre: null, pages: null }
      }
    })
  },

  setSearchState: ({ value, about }) =>
    set(({ searchState }) => {
      if (typeof about !== 'undefined')
        return { searchState: { value: searchState.value, about } }

      if (typeof value !== 'undefined')
        return { searchState: { about: searchState.about, value } }

      return { searchState: { value, about } }
    })
}))
