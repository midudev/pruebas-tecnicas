import { library } from '../data/books.json'
import { Book } from '../types/types'

export const getAllBooks = async () => {
  return Promise.resolve(
    library.map(item => item.book)
  )
}

export const isInBooks = (books: Book[], book: Book) => {
  return books.includes(book)
}

export const filterBooksByGenres = (books: Book[], genres: string[]) => {
  return books.filter(book => {
    if (genres.length === 0) {
      return true
    }
    return genres.indexOf(book.genre) !== -1
  })
}
