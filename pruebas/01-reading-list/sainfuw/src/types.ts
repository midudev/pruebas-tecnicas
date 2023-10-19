export interface LibraryApp {
  library: ILibrary[];
}

export type ILibrary = {
  book: IBook;
}

export type IBook = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: IAuthor;
}

export type IAuthor = {
  name: string;
  otherBooks: string[];
}

// Context
export interface AppContextInitialStateType {
  books: IBook[];
  filteredBooks: IBook[];
  readList: IBook[];
}

export interface AppContextType {
  books: IBook[];
  readList: IBook[];
  addToReadList: (book: IBook) => void;
  removeFromReadList: (book: IBook) => void;
  setReadList: (books: IBook[]) => void;
  filteredBooks: IBook[];
  setFilteredBooks: (books: IBook[]) => void;
}