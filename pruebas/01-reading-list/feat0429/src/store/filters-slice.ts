import { type StateCreator } from 'zustand'
import { Genre } from '../constants/genres.ts'
import { type BooksSlice } from './books-slice.ts'

export interface FiltersSlice {
  pagesFilter: number
  genreFilter: Genre
  searchInput: string
  updatePagesFilter: (maximumPages: number) => void
  updateGenreFilter: (genreFilter: Genre) => void
  updateSearchInput: (searchInput: string) => void
}

export const createFiltersSlice: StateCreator<FiltersSlice & BooksSlice, [], [], FiltersSlice> = (set) => ({
  pagesFilter: 0,
  genreFilter: Genre.All,
  searchInput: '',
  updatePagesFilter: (pagesFilter: number) => { set(() => ({ pagesFilter })) },
  updateGenreFilter: (genreFilter: Genre) => { set(() => ({ genreFilter })) },
  updateSearchInput: (searchInput: string) => {
    set(() => ({ searchInput }))
  }
})
