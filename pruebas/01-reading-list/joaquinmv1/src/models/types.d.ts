export interface Book {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    position: number;
    ISBN: string;
    author: {
      name: string;
      otherBooks: string[];
    };
  };
}