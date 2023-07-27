export interface Book {
  id: number;
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  author: Author;
}

interface Author {
  name: string;
  otherBooks: string[];
}
