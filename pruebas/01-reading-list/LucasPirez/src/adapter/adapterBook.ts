import { Book, Library } from '../getBooks'

export const adapterBook = (book: Library): Book => {
  const adapBook = book.book

  const adapter: Book = {
    title: adapBook.title,
    author: adapBook.author,
    genre: adapBook.genre,
    cover: adapBook.cover,
    synopsis: adapBook.synopsis,
    year: adapBook.year,
    pages: adapBook.pages,
    ISBN: adapBook.ISBN
  }

  return adapter
}

export const resetBook = (book: Book): Library => {
  return { book }
}
