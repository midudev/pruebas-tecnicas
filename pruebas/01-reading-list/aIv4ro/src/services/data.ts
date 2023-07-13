import data from '../../books.json'

export const books = data.library.map(item => item.book)
export const genres = new Set(books.map(book => book.genre))
