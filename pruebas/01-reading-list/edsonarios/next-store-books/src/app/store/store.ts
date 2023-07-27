import { Library } from '@/types/library'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface State {
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

    filterName: string
    setFilterName: (filterName: string) => void

    maxPageBooksCount: number
    setMaxPageBooksCount: (maxPageBooksCount: number) => void

    filterPageCount: number
    setFilterPageCount: (filterPageCount: number) => void
}

export const useStore = create<State>()(
    persist(
        (set) => ({
            library: [],
            setLibrary: (library: Library[]) => set(() => ({ library })),

            selectedBooks: [],
            setSelectedBooks: (selectedBooks: Library[]) => set(() => ({ selectedBooks })),

            listGenres: [],
            setListGenres: (listGenres: string[]) => set(() => ({ listGenres })),

            selectedGenre: '',
            setSelectedGenre: (selectedGenre: string) => set(() => ({ selectedGenre })),

            filteredBooks: [],
            setFilteredBooks: (filteredBooks: Library[]) => set(() => ({ filteredBooks })),

            filterName: '',
            setFilterName: (filterName: string) => set(() => ({ filterName })),

            maxPageBooksCount: 0,
            setMaxPageBooksCount: (count: number) => set({ maxPageBooksCount: count }),

            filterPageCount: 0,
            setFilterPageCount: (count: number) => set({ filterPageCount: count })
        }),
        {
            name: 'library-storage'
        }
    )
)
