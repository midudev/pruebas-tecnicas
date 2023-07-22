import books from '@/data/books.json'

export const getBooks = () => {
  return books.library.map(({ book }) => {
    return {
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.synopsis,
      year: book.year,
      ISBN: book.ISBN,
      author: book.author
    }
  })
}

export const getPagesNumberLimit = (books: BooksList, limit: 'min' | 'max') => {
  return limit === 'min'
    ? Math.min(...books.map(book => book.pages))
    : Math.max(...books.map(book => book.pages))
}

export type BooksList = ReturnType<typeof getBooks>
export type Book = ReturnType<typeof getBooks>[0]
