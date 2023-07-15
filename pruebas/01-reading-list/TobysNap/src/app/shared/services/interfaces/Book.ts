export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  isbn: string;
  author: {
    name: string;
    otherBooks: string;
  };
}
