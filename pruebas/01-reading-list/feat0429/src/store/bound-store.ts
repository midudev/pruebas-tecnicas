import { create } from 'zustand'
import { createBooksSlice } from './books-slice.ts'
import { createFiltersSlice, type FiltersSlice } from './filters-slice'
import { type BooksSlice } from './books-slice.ts'
import { persist } from 'zustand/middleware'

export const useBoundStore = create<FiltersSlice & BooksSlice >()(persist((...a) => ({
  ...createFiltersSlice(...a),
  ...createBooksSlice(...a)
}),
{
  name: 'reading list store',
  partialize: (state) => ({ booksInList: state.booksInList })
}
))
