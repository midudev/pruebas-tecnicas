"use client"
import { createContext } from 'react'
import { Books, Book, MaxAndMinPages } from '@typesFiles/Books'
import { Genres } from '@typesFiles/Genres'
import { HowManyBooksAre, FilterType } from '@typesFiles/General'

const LibraryContext = createContext({
  books: [] as Books,
  readingList: [] as Books,
  genres: [] as Genres,
  howManyBooksAre: {} as HowManyBooksAre,
  maxAndMinPages: {} as MaxAndMinPages,
  addBooksToReadingList: (book : Book) => {},
  removeBooksFromReadingList: (book: Book) => {},
  filterBooks: (value: number, filterType : FilterType) => {},
})

export default LibraryContext
