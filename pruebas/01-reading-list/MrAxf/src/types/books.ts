export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}

export interface BooksFilter {
  isInMyList?: boolean;
  genre?: string;
  minPages?: number;
  searchText?: string;
  priorityOrder?: boolean;
}

export type BooksInMyList = Record<string, 1 | 2 | 3>;
