import { library } from '../mocks/books.json'
import { type Book as BookType } from '../type'

export const getBooks = async (): Promise<BookType[]> => {
  const mappedBooks = library.map(book => book.book) as BookType[]

  return mappedBooks
}
