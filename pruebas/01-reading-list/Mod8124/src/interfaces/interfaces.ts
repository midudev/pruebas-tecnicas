export interface IAuthor {
  name: string;
  otherBooks: string[];
}

export interface IBook {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: IAuthor;
}

export interface IBooks {
  book: IBook;
}

//  components
export interface ICard {
  book: IBook;
  lecture?: boolean;
}

export interface IAccordion {
  title: string;
  children: React.ReactNode;
}

export interface IShowFilter {
  active: boolean;
  toggleActive: () => void;
}

// hooks
export interface IUseFilters {
  filterBooks: (book: IBooks) => boolean;
  searchBooks: (book: IBooks) => boolean;
  sortBooks: (a: IBooks, b: IBooks) => number;
}
