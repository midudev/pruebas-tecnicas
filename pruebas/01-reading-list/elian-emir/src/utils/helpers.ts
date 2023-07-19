import { booksStore } from '../store/booksStore'
import { fetchBooksData } from './fetch'

export function selectGenre() {
  const books = fetchBooksData()
  const genreAvalaibles = books.map((b) => b.genre)
  const genre: string[] = []
  for (const gen of genreAvalaibles) {
    const isGenre = genre.find((g) => g === gen)
    if (isGenre === undefined) genre.push(gen)
  }
  return genre
}
