import { ALL_CATEGORIES } from '../../constants'
import { API_URL } from './config'
import { getBooks } from './getBooks'

export async function getBooksCategories () {
  const books = await getBooks(API_URL)

  const booksCategories = books.map((book) => book.bookGenre)
  const filterCategories = new Set([ALL_CATEGORIES, ...booksCategories])

  return Array.from(filterCategories)
}
