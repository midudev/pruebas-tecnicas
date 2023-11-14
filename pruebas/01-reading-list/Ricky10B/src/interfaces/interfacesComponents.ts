export interface ILibrary {
  library: CardBookProps[]
}

export interface CardBookProps {
  book: Book;
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

interface Author {
  name: string;
  otherBooks: string[];
}

export interface IISBNProp {
  ISBN: string
}
