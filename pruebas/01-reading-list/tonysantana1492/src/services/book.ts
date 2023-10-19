import booksMocks from '../mocks/books.json'

export const bookService = async () => {
  const booksReponse = booksMocks.library.map(({ book }) => {
    return book
  })

  return booksReponse
}
