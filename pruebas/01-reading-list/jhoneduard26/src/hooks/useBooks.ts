import books from '../data/data.json'

export const useBooks = () => {
  const booksReady = books.library.map(({ book }) => book)

  const filterByGenrer = (genre: string) => {
    return booksReady.filter(book => book.genre === genre)
  }

  const filterByPages = (pages: number) => {
    return booksReady.filter(book => book.pages <= pages)
  }

  const filterByTitle = (title: string) => {
    return booksReady.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
  }

  const allGenres = [...new Set(booksReady.map(book => book.genre))]

  const allAuthors = [...new Set(booksReady.map(book => book.author))]

  return {
    books: booksReady,
    filterByGenrer,
    filterByPages,
    filterByTitle,
    allAuthors,
    allGenres
  }
}
