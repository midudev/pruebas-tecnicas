import books from '../../../books.json'

export function getBooks () {
  return books.library.map(book => {
    return {
      title: book.book.title,
      pages: book.book.pages,
      genre: book.book.genre,
      cover: book.book.cover,
      synopsis: book.book.synopsis,
      year: book.book.year,
      ISBN: book.book.ISBN,
      author: {
        name: book.book.author.name,
        otherBooks: book.book.author.otherBooks
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

export function getGenres () {
  return [...new Set(books.library.map(book => book.book.genre))]
}

export function filterBooks (filters) {
  const books = getBooks()
  return books.filter(book => {
    return (
      (filters.search === '' || book.title.toLowerCase().includes(filters.search.toLowerCase()) || book.author.name.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.genres.length === 0 || filters.genres.includes(book.genre)) &&
      (book.pages <= filters.pages)
    )
  })
}
