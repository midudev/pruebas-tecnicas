export interface Books {
  book: BooksState;
}

export interface BooksState {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: AuthorType;
}

interface AuthorType {
  name: string;
  otherBooks: string[];
}
