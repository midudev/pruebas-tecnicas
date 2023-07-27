import { create } from 'zustand'

interface filterProps {
  page?: number
  genre?: string
  title?: string
}

interface FilterInterface {
  filter: filterProps
  setPage: (page: number) => void
  setGenre: (genre: string) => void
  setTitle: (title: string) => void
}

export const useStoreFilter = create<FilterInterface>((set) => ({
  filter: {},
  setPage: (page) => set((state) => ({ filter: { ...state.filter, page } })),
  setGenre: (genre) => set((state) => ({ filter: { ...state.filter, genre } })),
  setTitle: (title) => set((state) => ({ filter: { ...state.filter, title } }))
}))
