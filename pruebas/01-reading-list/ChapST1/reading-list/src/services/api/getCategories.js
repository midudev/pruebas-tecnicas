import { API_URL } from './constants'
import { getBooks } from './getBooks'

export async function getBooksCategories () {
  const books = await getBooks(API_URL)

  const booksCategories = books.map(({ book }) => book.genre)
  const filterCategories = new Set(['Todas', ...booksCategories])

  return Array.from(filterCategories)
}
