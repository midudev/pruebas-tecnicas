import { type Book } from '../types/book'
import data from '../data/books.json'
import { type List } from '../types/constants'

export const BOOKS: Book[] = data.library.map((data) => data.book)

export const GENRES: Array<Book['genre']> = Array.from(new Set(BOOKS.map((book) => book.genre)))

export const LIST: List = {
  ALL: 'ALL',
  READING_LIST: 'READING_LIST'
}
