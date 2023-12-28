import booksJSON from '../services/books.json'
import { type Library } from '../models'

export const BOOKS: Library = booksJSON.library.map(({ book }) => book)
export const FILTERS_BOOKS = {
  titleOrAuthor: '',
  genre: 'All',
  pages: 0
}

export const GENRE_BOOKS = Array.from(new Set(BOOKS.map(({ genre }) => genre)))
