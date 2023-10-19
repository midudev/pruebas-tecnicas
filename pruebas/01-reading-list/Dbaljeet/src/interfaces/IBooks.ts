export interface ILibrary {
  library: IBook[]
}

export interface IBook {
  book: {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: string
    author: {
      name: string
      otherBooks: string[]
    }
  }
}

export interface IBookCard {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
}
