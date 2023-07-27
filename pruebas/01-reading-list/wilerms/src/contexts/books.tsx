import { useLocalStorage } from '@hooks/useLocalStorage'
import { createContext, useContext, type ReactNode, type FC } from 'react'

interface BooksContextType {
  favoriteBooks: string[]
  deleteFavoriteBook: (id: string) => void
  addFavoriteBook: (id: string) => void
}

interface BooksContextProviderType {
  children: ReactNode
}

const BooksContext = createContext<BooksContextType>({
  favoriteBooks: [],
  deleteFavoriteBook: (id) => {},
  addFavoriteBook: (id) => {}
})

export const BooksContextProvider: FC<BooksContextProviderType> = ({
  children
}) => {
  const [favoriteBooks, setFavoriteBooks] = useLocalStorage<string[]>('favorite_books', [])

  const deleteFavoriteBook = (id: string) => {
    const newFavoriteBooks = favoriteBooks.filter(ISBN => ISBN !== id)
    setFavoriteBooks(newFavoriteBooks)
  }

  const addFavoriteBook = (ISBN: string) => {
    if (!favoriteBooks.includes(ISBN)) {
      const newFavoriteBooks = [...favoriteBooks, ISBN]
      setFavoriteBooks(newFavoriteBooks)
    }
  }

  return (
    <BooksContext.Provider
      value={{
        favoriteBooks,
        deleteFavoriteBook,
        addFavoriteBook
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export const useBooksContext = () => useContext(BooksContext)
