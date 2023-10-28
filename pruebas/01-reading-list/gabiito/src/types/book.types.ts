import { TypeWithKey } from ".";

export interface Library {
  library: Shelf[];
}

export interface Shelf {
  book: Book;
}

export interface Book {
  title:    string;
  pages:    number;
  genre:    string;
  cover:    string;
  synopsis: string;
  year:     number;
  ISBN:     string;
  author:   Author;
}

export interface Author {
  name:       string;
  otherBooks: string[];
}

export interface BookStoreItem extends Book {
  order: number;
}

export type BookStore = TypeWithKey<BookStoreItem>;

export interface LocalStore {
  books: BookStore;
  count: number;
}