import { createContext } from 'react'
import { LandingPage } from '../pages/LandingPage'
import { useBooks } from '../hooks/useBooks'

export const GlobalContext = createContext(null)

export function BooksContext () {
  const { availableBooks, filteredBooks, readingList, addToReadingList, deleteFromList, getSelectedGenre, selectedGenre, updateInputValue } = useBooks()

  return (
    <GlobalContext.Provider value={{ availableBooks, filteredBooks, readingList, addToReadingList, deleteFromList, getSelectedGenre, selectedGenre, updateInputValue }}>
      <LandingPage />
    </GlobalContext.Provider>
  )
}
