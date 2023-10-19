export interface IBook {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: IAuthor
}

export interface IAuthor {
  name: string
  otherBooks: string[]
}
