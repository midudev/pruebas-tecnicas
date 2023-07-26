interface Author {
  name: string
  otherBooks: string[]
}

interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export interface Library {
  book: Book
}

export interface LibraryData {
  library: Library[]
}
