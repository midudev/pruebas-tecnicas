import { Library } from '@/types/library'
import { create } from 'zustand'

interface State {
  library: Library[]
  setLibrary: (library: Library[]) => void

  selectedBooks: Library[]
  setSelectedBooks: (selectedBooks: Library[]) => void

  listGenres: string[]
  setListGenres: (listGenres: string[]) => void

  selectedGenre: string
  setSelectedGenre: (selectedGenres: string) => void

  filteredBooks: Library[]
  setFilteredBooks: (filteredBooks: Library[]) => void
}

export const useStore = create<State>()((set) => ({
  library: [],
  setLibrary: (library: Library[]) => set(() => ({ library })),

  selectedBooks: [],
  setSelectedBooks: (selectedBooks: Library[]) => set(() => ({ selectedBooks })),

  listGenres: [],
  setListGenres: (listGenres: string[]) => set(() => ({ listGenres })),

  selectedGenre: '',
  setSelectedGenre: (selectedGenre: string) => set(() => ({ selectedGenre })),

  filteredBooks: [],
  setFilteredBooks: (filteredBooks: Library[]) => set(() => ({ filteredBooks }))
}))
