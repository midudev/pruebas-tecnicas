import { allGenre } from './constants'
import db from './db/books.json'

const { library } = db
export const books = library.map(({ book }) => book)
export const genres = [allGenre, ...new Set(books.map(({ genre }) => genre))]
