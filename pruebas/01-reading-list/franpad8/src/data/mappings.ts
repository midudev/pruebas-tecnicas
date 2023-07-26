import { type Book, type IMDBBook } from '../types'

export function mapImdbToBook (imdbBook: IMDBBook): Book {
  return {
    title: imdbBook.title,
    pages: imdbBook.pages,
    genre: imdbBook.genre,
    cover: imdbBook.cover,
    synopsis: imdbBook.synopsis,
    year: imdbBook.year,
    id: imdbBook.ISBN
  }
}
