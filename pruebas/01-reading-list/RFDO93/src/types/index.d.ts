export interface BookInterface {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorInterface
}

export interface AuthorInterface {
  name: string
  otherBooks: string[]
}

export interface PropBookContext {
  booksList: BookInterface[]
  bookPendingList: BookPending[]
  numberBookPending: number
  listGenre: string[]
  selectGenre: string
  search: string
  
  addBookPending: (book: BookInterface['ISBN']) => void,
  isBookPending: (book: BookInterface['ISBN']) => boolean,
  removeBookPending: (book: BookInterface['ISBN']) => void,
  funOnChangeGenre: (genreData:FilterBook['genre']) => void,
  funOnChangeSearch: (searchData:FilterBook['search']) => void,
  getBookId: (idBook:BookInterface["title"]) => BookInterface | null
}

export interface BookPending {
  ISBN: BookInterface['ISBN']
  title: BookInterface['title']
  cover: BookInterface['cover']
}

export interface FilterBook {
  genre: string
  search: string
}