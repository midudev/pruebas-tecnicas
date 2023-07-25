export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
}

export enum LOCAL_STORAGE_KEYS {
  BOOKS_AVAILABLE = 'booksAvailable',
  BOOKS_TO_READ = 'booksToRead',
  BOOKS_FILTERED = 'booksFiltered',
  FILTERS_BOOKS = 'filtersBooks'
}

export interface FiltersBooks {
  title: string
  author: string
  genre: string
  pages: number
}

export enum BOOKS_GENRE_TYPES {
  ALL = 'All',
  FANTASIA = 'Fantasía',
  CIENCIA_FICCION = 'Ciencia ficción',
  ZOMBIES = 'Zombies',
  TERROR = 'Terror'
}
