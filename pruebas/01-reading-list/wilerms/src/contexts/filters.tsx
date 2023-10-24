import { useLocalStorage } from '@hooks/useLocalStorage'
import { createContext, useContext, type ReactNode, type FC, useState } from 'react'

interface FiltersContextType {
  genresFilter: string[]
  query: string
  setQuery: (query: string) => void
  togleGenreInFilters: (genre: string) => void
  cleanGenresFilter: () => void
}

interface FiltersContextProviderType {
  children: ReactNode
}

const FiltersContext = createContext<FiltersContextType>({
  genresFilter: [],
  query: '',
  setQuery: () => { },
  togleGenreInFilters: () => { },
  cleanGenresFilter: () => { }
})

export const FiltersContextProvider: FC<FiltersContextProviderType> = ({
  children
}) => {
  
  const [genresFilter, setGenresFilter] = useState<string[]>([])
  const [query, setQuery] = useState<string>('')

  const togleGenreInFilters = (genre: string) => {
    if (!genresFilter.includes(genre)) {
      setGenresFilter([...genresFilter,  genre])
    } else {
      const newGenresFilter = genresFilter.filter(gen => gen !== genre)
      setGenresFilter(newGenresFilter)
    }
  }

  const cleanGenresFilter = () => setGenresFilter([])

  return (
    <FiltersContext.Provider
      value={{
        query,
        setQuery,
        genresFilter,
        togleGenreInFilters,
        cleanGenresFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => useContext(FiltersContext)
