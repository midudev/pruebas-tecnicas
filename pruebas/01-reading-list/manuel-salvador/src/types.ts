export type IBook = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: IAuthor;
};

export type IAuthor = {
  name: string;
  otherBooks: string[];
};

export type IBookContext = {
  library: IBook[];
  filteredLibrary: IBook[];
  savedBooks: IBook[];
  updateSavedBooks: (ISBN: string) => void;
  filters: IFilters;
  updateFilters: (type: keyof IFilters, value: string[] | string | number) => void;
};
export type IFilters = {
  pages: number;
  genres: string[];
  title: string;
  year: number;
  ISBN: string;
  author: string;
};
