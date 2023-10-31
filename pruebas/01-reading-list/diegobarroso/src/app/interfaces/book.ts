export interface BookClass {
  library: Library[];
}

export interface Library {
  book: Book;
}

export interface Book {
  author:       Author;
  cover:        string;
  genre:        string;
  inListToRead: boolean
  ISBN:         string;
  pages:        number;
  synopsis:     string;
  title:        string;
  year:         number;
}

export interface Author {
  name:       string;
  otherBooks: string[];
}