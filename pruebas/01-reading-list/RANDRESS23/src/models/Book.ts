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
  BOOKS_TO_READ = 'booksToRead'
}
