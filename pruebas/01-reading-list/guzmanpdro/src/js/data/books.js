import { Book } from '../classes/Book'
import data from '../../../../books.json'

export const books = data.library.map(elem => {
  const { book } = elem
  const { title, pages, genre, cover, synopsis, year, ISBN, author } = book
  return new Book(title, pages, genre, cover, synopsis, year, ISBN, author)
})

export const genres = data.library.map(elem => {
  const { book } = elem
  return book.genre
})
