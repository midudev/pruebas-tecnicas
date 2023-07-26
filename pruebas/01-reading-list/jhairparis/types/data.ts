export interface JsonType {
  library: LibraryType[];
}

export interface LibraryType {
  book: BookType;
}

export interface BookType {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: AuthorType;
}

export interface AuthorType {
  name: string;
  otherBooks: string[];
}
