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
  isInReadList?: boolean;
  genre?: string;
  minPages?: number;
  searchText?: string;
  priorityOrder?: boolean;
}

export type ReadList = Record<string, 1 | 2 | 3>;
