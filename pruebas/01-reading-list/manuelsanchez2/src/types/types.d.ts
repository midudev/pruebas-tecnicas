export type BookAuthor = {
  name: string
  otherBooks: string[]
}

export type Book = {
  id: number
  title: string
  synopsis: string
  pages: number
  genre: string
  year: number
  ISBN: string
  cover: string
  author: BookAuthor
  isInReadingList: boolean
  priority: number
}
