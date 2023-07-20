import { createContext, useState } from 'react'
import { INITIAL_PAGE } from '../constants'

interface FiltersContextType {
  genreFilter: string
  setGenreFilter: React.Dispatch<React.SetStateAction<string>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  inputSearchValue: string
  setInputSearchValue: React.Dispatch<React.SetStateAction<string>>
  showSideBar: boolean
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: FiltersContextType = {
  genreFilter: '',
  setGenreFilter: () => { },
  currentPage: INITIAL_PAGE,
  setCurrentPage: () => { },
  inputSearchValue: '',
  setInputSearchValue: () => { },
  showSideBar: false,
  setShowSideBar: () => { }
}

export const FiltersContext = createContext<FiltersContextType>(initialState)

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
  const [genreFilter, setGenreFilter] = useState('')
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE)
  const [inputSearchValue, setInputSearchValue] = useState('')
  const [showSideBar, setShowSideBar] = useState(false)

  return (
    <FiltersContext.Provider value={{
      genreFilter,
      setGenreFilter,
      currentPage,
      setCurrentPage,
      inputSearchValue,
      setInputSearchValue,
      showSideBar,
      setShowSideBar
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
