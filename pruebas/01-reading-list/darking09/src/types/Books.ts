export type Book = {
  id: number;
  title: string;
  pages: number;
  genre_id: number;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author_id: Author;
  is_available: boolean;
  created_at: Date;
}

export type Author = {
  name: string;
  otherBooks: Array<string>;
}

export type Books = Array<Book>

export type BookAPI = {
  library: Books;
}

export type MaxAndMinPages = {
  maxPage: number;
  minPage: number;
}
