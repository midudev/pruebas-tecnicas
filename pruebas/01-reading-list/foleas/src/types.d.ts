// BOOKS
export type Author = {
  name: string;
  otherBooks: Array[string];
};

export type Book = {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    ISBN: string;
    author: Author;
  };
};

export type Library = {
  library: Array<Book>;
};
