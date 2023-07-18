import { createContext, useState } from 'react'
import { INITIAL_PAGE } from '../constants'

interface FiltersContextType {
  genreFilter: string
  setGenreFilter: React.Dispatch<React.SetStateAction<string>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const initialState: FiltersContextType = {
  genreFilter: '',
  setGenreFilter: () => {},
  currentPage: INITIAL_PAGE,
  setCurrentPage: () => {}
}

export const FiltersContext = createContext<FiltersContextType>(initialState)

export function FiltersProvider ({ children }: { children: React.ReactNode }) {
  const [genreFilter, setGenreFilter] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE)

  return (
    <FiltersContext.Provider value={{
      genreFilter,
      setGenreFilter,
      currentPage,
      setCurrentPage
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
