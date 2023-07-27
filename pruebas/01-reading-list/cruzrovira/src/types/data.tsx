export type Data = {
  library: Library[]
}

export type Library = {
  book: Book & { reading: boolean }
}

export type Book = {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
  reading: boolean
}

export type Author = {
  name: string
  otherBooks: string[]
}
