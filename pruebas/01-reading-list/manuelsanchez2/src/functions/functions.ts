import { type Signal } from '@builder.io/qwik'
import { type Book } from '~/types/types'
import { removeAccents } from './utils'

export function getAllGenres(books: Signal<Book[]>) {
  const allBooks = new Set(books.value.map((book) => book.genre))
  return Array.from(allBooks)
}

export function filterBooksByGenre(books: Book[], genre: string) {
  return books.filter((book) => book.genre === genre)
}

export function filterBooksByTitle(books: Book[], title: string) {
  const lowerCaseCity = removeAccents(title.toLowerCase())
  return books.filter(
    (book) =>
      removeAccents(book.title.toLowerCase()) === lowerCaseCity ||
      removeAccents(book.title.toLowerCase()).startsWith(lowerCaseCity)
  )
}

export function priorityTransformer(priority: number) {
  switch (priority) {
    case 0:
      return '⚪️'
    case 1:
      return '🟠'
    case 2:
      return '🔴'
    default:
      return 'Ninguna prio'
  }
}
