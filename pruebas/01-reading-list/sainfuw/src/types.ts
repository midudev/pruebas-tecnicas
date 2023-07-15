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

// AppContext
export interface AppContextInitialStateType {
  books: IBook[];
  favoriteBooks: IBook[];
}

export interface AppContextType {
  books: IBook[];
  favoriteBooks: IBook[];
  addToFavorites: (book: IBook) => void;
  removeFromFavorites: (book: IBook) => void;
}