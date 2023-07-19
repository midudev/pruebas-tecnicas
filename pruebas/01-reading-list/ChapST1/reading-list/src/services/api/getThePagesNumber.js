import { getBooks } from './getBooks'

export async function getThePagesNumber () {
  const books = await getBooks()
  const pagesNumber = books.map(({ book }) => book.pages)

  return pagesNumber
}
