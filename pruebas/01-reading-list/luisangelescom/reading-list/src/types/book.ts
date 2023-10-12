interface AuthorInt {
  name: string
  otherBooks: string[]
}

export interface BookInt {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorInt
}

export interface BookProps {
  book: BookInt
}

export interface libraryInt {
  library: BookProps[]
}

export interface ItemBookProps {
  book: BookInt
  isRemove?: boolean
  removeItem?: (ISNB: string) => void
  addBookUser?: (book: BookInt) => void
}
