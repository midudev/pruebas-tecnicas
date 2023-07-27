import type { Book } from '@/types'

export function getGenres(books: Book[]) {
  const genres = Array.from(new Set(books.map((book) => book.genre)))

  return genres
}
