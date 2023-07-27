import { Author } from './Author'

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

const pages = (book: Book) => {
  if (typeof book.pages !== 'number' || Number.isNaN(book.pages)) {
    return 0
  }
  return book.pages
}

export const Book = {
  pages
}
