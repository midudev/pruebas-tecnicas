export interface APIResults {
  library: Library[]
}


export interface Library {
  book: Book
}

export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Author {
  name: string
  otherBooks: string[]
}

export interface FilterBooks {
  maxPages: number | null
  genre: Genre
  bookToSearch: string
}

export enum Genre {
  ALL = 'all',
  FICCION = 'Ciencia ficción',
  FANTASIA = 'Fantasía',
  ZOMBIES = 'Zombies',
  TERROR = 'Terror'
}
