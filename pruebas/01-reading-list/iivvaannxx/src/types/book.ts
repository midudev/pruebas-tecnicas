export interface BookEntry {

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

export interface Library {

  library: BookEntry[]
}

export interface BooksData {

  library: Book[]
  genres: string[]

  pageLimits: [number, number]
}
