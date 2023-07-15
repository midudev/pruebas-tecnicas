import db from '@/assets/db/books.json'
import { Book } from '@/typings/books'

export function useLibrary(): [Book[], string[]] {
  const { library } = db

  const books = library.map<Book>(({ book }) => book)
  const genres = [...new Set(books.map(({ genre }) => genre))]

  return [books, genres]
}
