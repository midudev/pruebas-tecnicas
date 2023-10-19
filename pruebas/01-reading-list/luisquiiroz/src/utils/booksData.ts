import books from '../mocks/books.json'
import { BookType } from '../types/types'

const { library } = books

const formattedBooks: BookType[] = library.map(({ book }) => ({
  title: book.title ?? 'Sin título',
  pages: book.pages ?? 0,
  genre: book.genre ?? 'Sin genero',
  cover: book.cover ?? 'Sin imagen',
  synopsis: book.synopsis ?? 'Sin sinopsis',
  year: book.year ?? 0,
  isbn: book.ISBN ?? 'Sin isbn',
  author: book.author ?? { name: 'Desconocido', otherBooks: [''] },
  reading: false
}))

const genreOfBooks: string[] = Array.from(new Set(formattedBooks.map((book) => book.genre)))

const pagesOfBooks = ['0', '200', '400', '600', '800', '1000']

const matchFilters = (books: BookType[], genre: string, pages: string) => books.filter(book => {
  const genreMatch = genre === '' || genre === book.genre
  const pagesMatch = pages === '' || book.pages >= Number(pages)

  return genreMatch && pagesMatch
})

export {
  formattedBooks,
  genreOfBooks,
  pagesOfBooks,
  matchFilters
}
