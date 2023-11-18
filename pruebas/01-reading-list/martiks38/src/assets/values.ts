import { allGenre, nameStorage } from './constants'
import db from './db/books.json'
import mockDB from './__mock__/books.json'

import type { Book } from '@/typings/books'

export type BookDataList = Omit<Book, 'author' | 'synopsis' | 'year'>[]
type ListOfBookLists = { listBooksAvailable: BookDataList; readingList: BookDataList }

let library = db.library

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'test') library = mockDB.library
}

const books = library.map(({ book }) => book)
const genres = [allGenre, ...new Set(books.map(({ genre }) => genre))]

let readingListStr = '[]'

if (typeof window !== 'undefined') {
  readingListStr = window.localStorage.getItem(nameStorage.listOfReading) || '[]'
}

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

const initialListBooks: ListOfBookLists = {
  listBooksAvailable: booksData,
  readingList: []
}

const currentListBooks: ListOfBookLists = {
  listBooksAvailable,
  readingList
}

export { books, currentListBooks, genres, initialListBooks, listBooksAvailable, readingList }
