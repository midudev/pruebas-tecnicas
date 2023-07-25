export interface BooksList {
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

export enum Genres {
  ALL = 'Todos',
  FANTASIA = 'Fantasía',
  CIENCIA = 'Ciencia ficción',
  ZOMBIES = 'Zombies',
  TERROR = 'Terror'
}

export interface Filters {
  pages: number
  genre: Genres
}
