import books from '../data/books.json'

export const getBooks = () => {
  const mapBooks = books.library.map(({ book }) => {
    return { ...book }
  })

  return mapBooks
}
