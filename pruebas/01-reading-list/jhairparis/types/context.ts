import type { BookType, LibraryType } from "@/types/data";

export interface GenreType {
  [key: string]: string;
}

export type StateType = {
  library: LibraryType[];
  read: BookType[];
  total: number;
  nRead: number;
  genre: GenreType;
  origin: string;
  isFilter: [boolean, string];
};

export interface GlobalStateType {
  data: StateType;
  addLibrary: (book: BookType) => void;
  addRead: (book: BookType) => void;
  setGlobalState: (state: StateType) => void;
  filter: (genre: string | null) => void;
}
