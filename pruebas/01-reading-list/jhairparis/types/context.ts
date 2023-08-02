import type { BookType, LibraryType } from "@/types/data";

export interface GenreType {
  [key: string]: string;
}

export enum filterAvailable {
  genre,
  page,
  text,
}

export type filterData = {
  genre?: string | -99;
  page?: number;
};

export type StateType = {
  library: LibraryType[];
  read: BookType[];
  total: number;
  nRead: number;
  genre: GenreType;
  origin: string;
  isFilter: [boolean, string];
};

export type fnState = {
  addLibrary: (book: BookType) => void;
  addRead: (book: BookType) => void;
  setGlobalState: (state: StateType) => void;
  filter: (type: filterAvailable, filterData: filterData) => void;
};

export interface GlobalStateType extends fnState {
  data: StateType;
}
