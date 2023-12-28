export interface ILibrary {
  library: IBooks[];
}

export interface IBooks {
    book: Book
}

interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

interface Author {
  name: string;
  otherBooks: string[];
}

