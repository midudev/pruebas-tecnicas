export interface Author {
  name: string;
  otherBooks: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface LibraryBook {
  book: Book;
}

export interface Data {
  library: LibraryBook[];
}

export interface BookWithIdType {
  id: number;
  book: Book;
}

export type ListOfBooks = BookWithIdType[];
