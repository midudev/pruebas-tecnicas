import { allGenre, nameStorage } from './constants'
import db from './db/books.json'

import type { Book } from '@/typings/books'

export type BookDataList = Omit<Book, 'author' | 'synopsis' | 'year'>[]

const { library } = db

const books = library.map(({ book }) => book)
const genres = [allGenre, ...new Set(books.map(({ genre }) => genre))]

const readingListStr = window.localStorage.getItem(nameStorage.listOfReading) || '[]'

const readingList: BookDataList = JSON.parse(readingListStr)

const booksData = books.map(({ cover, genre, ISBN, pages, title }) => ({
  cover,
  genre,
  ISBN,
  pages,
  title
}))

const listBooksAvailable = booksData.filter(({ title }) =>
  readingList.every((bookRead) => bookRead.title !== title)
)

const initialListBooks: { listBooksAvailable: BookDataList; readingList: BookDataList } = {
  listBooksAvailable: booksData,
  readingList: []
}

export { books, genres, initialListBooks, listBooksAvailable, readingList }
