export interface BookListT {
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
  addedToReadingList?: boolean
}

export interface Author {
  name: string
  otherBooks: string[]
}

export enum Genres {
  FANTASIA = "Fantasía",
  CIENCIA_FICCION = "Ciencia ficción",
  ZOMBIES = "Zombies",
  TERROR = "Terror",
  TODAS = "Todas"
}
