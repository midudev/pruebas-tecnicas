export interface Root {
  library: Library[]
}

export interface Library {
  book: Book
}

export interface Book {
  title: string
  pages: number
  genre: Genre
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

export type Genre = "Fantasía" | "Terror" | "Romance" | "Suspenso" | "Infantil" | "Comedia" | "Aventura" | "Ciencia ficción" | "Drama" | "Poesía" | "Zombies" | string