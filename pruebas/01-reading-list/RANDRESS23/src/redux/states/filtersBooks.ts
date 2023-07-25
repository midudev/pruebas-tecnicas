import { createSlice } from '@reduxjs/toolkit'
import { type FiltersBooks, LOCAL_STORAGE_KEYS } from '../../models'
import { FILTERS_BOOKS } from '../../data/books'

const filtersBooks = localStorage.getItem(LOCAL_STORAGE_KEYS.FILTERS_BOOKS)
const initialState: FiltersBooks = filtersBooks !== null
  ? JSON.parse(filtersBooks)
  : FILTERS_BOOKS

export const filtersBooksSlice = createSlice({
  name: LOCAL_STORAGE_KEYS.FILTERS_BOOKS,
  initialState,
  reducers: {
    changeTitleOrAuthor: (state, action) => {
      const { newTitleOrAuthor } = action.payload
      const newFiltersBooks = {
        ...state,
        title: newTitleOrAuthor,
        author: newTitleOrAuthor
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.FILTERS_BOOKS, JSON.stringify(newFiltersBooks))
      return newFiltersBooks
    },
    changeGenre: (state, action) => {
      const { newGenre } = action.payload
      const newFiltersBooks = {
        ...state,
        genre: newGenre
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.FILTERS_BOOKS, JSON.stringify(newFiltersBooks))
      return newFiltersBooks
    },
    changePages: (state, action) => {
      const { newPages } = action.payload
      const newFiltersBooks = {
        ...state,
        pages: newPages
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.FILTERS_BOOKS, JSON.stringify(newFiltersBooks))
      return newFiltersBooks
    }
  }
})

export const { changeTitleOrAuthor, changeGenre, changePages } = filtersBooksSlice.actions
export default filtersBooksSlice.reducer
