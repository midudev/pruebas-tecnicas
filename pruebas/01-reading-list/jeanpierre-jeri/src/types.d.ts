export interface BooksResponse {
  library: Book[]
}

export interface Book {
  book: BookInfo
}

export interface BookInfo {
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
