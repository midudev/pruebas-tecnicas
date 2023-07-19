import books from '../data/books.json'

export const getGenres = () => {
  const genres = books.library.map(({ book }) => book.genre)
  return [...new Set(genres)]
}
