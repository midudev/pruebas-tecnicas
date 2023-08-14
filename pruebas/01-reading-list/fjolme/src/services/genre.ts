import { Book } from '../types/types'

export const getAllGenres = (books: Book[]) => {
  return [...new Set(books.map(book => book.genre))].sort()
}

export const addOrRemoveGenre = (genres: string[], genre: string) => {
  const index = genres.indexOf(genre)
  if (index === -1) return [...genres, genre]

  const copyOfGenres = [...genres]
  copyOfGenres.splice(index, 1)
  return copyOfGenres
}
