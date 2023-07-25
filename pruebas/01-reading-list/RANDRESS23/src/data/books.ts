import booksJSON from '../services/books.json'
import { type Library } from '../models'

export const BOOKS: Library = booksJSON.library.map(({ book }) => book)
export const FILTERS_BOOKS = {
  title: '',
  author: '',
  genre: 'All',
  pages: 0
}
