import library from '@constants/books.json'
import { STORAGE_KEYS } from '@constants/storageKeys'
import { type Book } from 'types.d'

/**
 * This function returns the storaged books, in this case from a json file
 * @returns a list of books
 */
export const getBooks = (): Book[] => {
  return library.library.map(({ book }) => {
    return book
  })
}

export const getFavoriteBooks = (): Book[] => {
  const favoriteBooks = localStorage.getItem(STORAGE_KEYS.FAVORITE_BOOKS) ?? [] as string[]
  return library.library
    .map(({ book }) => book)
    .filter(({ ISBN }) => favoriteBooks.includes(ISBN))
}

export const getGenres = () => {
  const genres = library.library.map(({ book }) => book.genre)
  return ['Todos', ...new Set(genres)]
}
