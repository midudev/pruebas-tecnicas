export interface BooksState {
  books: IBook[]
  readingList: IBook[]
  countBookAvalaible: number
  countBookToRead: number
  addBooksToReadingList: (isbn: string) => void
  removeBookOfList: (isbn: string) => void
}

export interface IAuthor {
  name: string;
  otherBooks: string[];
}

export interface IBook {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: IAuthor;
}

export interface ILibrary {
  book: IBook[];
}