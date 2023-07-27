import { Books, MaxAndMinPages } from '@typesFiles/Books'
import { Genres  } from '@typesFiles/Genres'
import { FilterType } from '@typesFiles/General'

export type LibraryContextType = {
  books: Books,
  readingList: Books,
  genres: Genres,
  maxAndMinPages: MaxAndMinPages,
  addBooksToReadingList: (books: Books) => void,
  removeBooksFromReadingList: (books: Books) => void,
  filterBooks: (value: number, filterType : FilterType) => void,
}
