import { create } from 'zustand'

import { type GenresAllowed } from '../types'

export interface FilterStore {
  genreFilter: string
  setGenreFilter: (genreFilter: GenresAllowed) => void
  pageFilter: number
  setPageFilter: (pageFilter: number) => void
  titleFilter: string
  setTitleFilter: (titleFilter: string) => void
}

export const useFilterStore = create<FilterStore>(set => ({
  genreFilter: '',
  setGenreFilter: genreFilter => { set({ genreFilter }) },
  pageFilter: 0,
  setPageFilter: pageFilter => { set({ pageFilter }) },
  titleFilter: '',
  setTitleFilter: titleFilter => { set({ titleFilter }) }
}))
