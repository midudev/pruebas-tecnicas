import { library } from '../data/books.json'
import { type BookType } from '../types'

export const getBooks = (): BookType[] => {
  return library.map(({ book }) => book)
}
