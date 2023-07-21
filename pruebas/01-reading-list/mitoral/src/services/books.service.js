import books from '../../../books.json'

export function getBooks () {
  return books.library.map(book => {
    return {
      title: book.title,
      pages: book.pages,
      genre: book.genre,
      cover: book.cover,
      synopsis: book.synopsis,
      year: book.year,
      ISBN: book.ISBN,
      author: {
        name: book.author.name,
        otherBooks: book.author.otherBooks
      }
    }
  })
}

export function getMaxPages () {
  return Math.max(...books.library.map(book => book.book.pages))
}

export function getMinPages () {
  return Math.min(...books.library.map(book => book.book.pages))
}
