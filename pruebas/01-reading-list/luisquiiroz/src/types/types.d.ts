
export interface BookType {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  isbn: string
  author: AuthorType
  reading: boolean
}

export interface AuthorType {
  name: string
  otherBooks: string[]
}

export interface SaveToLocalStorageParams {
  books: BookType[]
  readingList: BookType[]
}
