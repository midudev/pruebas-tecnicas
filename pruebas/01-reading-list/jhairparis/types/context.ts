import type { BookType, LibraryType } from "@/types/data";

export interface GenreType {
  [key: string]: string;
}

export enum filterAvailable {
  NOT,
  genre,
  page,
  text,
}

// value -99 is for clean
export type filterData = {
  genre?: string | -99;
  page?: [number, number] | -99;
};

export type StateType = {
  library: LibraryType[];
  read: BookType[];
  total: number;
  nRead: number;
  genre: GenreType;
  min: number;
  max: number;
  origin: string;
  isFilter: [filterAvailable, filterData];
};

export type fnState = {
  addLibrary: (book: BookType) => void;
  addRead: (book: BookType) => void;
  setFromJson: () => void;
  setGlobalState: (state: StateType) => void;
  filter: (type: filterAvailable, filterData: filterData) => void;
};

export interface GlobalStateType extends fnState {
  data: StateType;
}
