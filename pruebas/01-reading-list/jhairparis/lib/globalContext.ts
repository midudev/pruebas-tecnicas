import { createContext, useContext } from "react";
import { BookType, LibraryType } from "@/types/books";

export type StateType = {
  library: LibraryType[];
  read: BookType[];
  total: number;
  nRead: number;
  genre: Set<string>;
  origin: string;
  isFilter: [boolean, string];
};

export interface GlobalStateType extends StateType {
  addLibrary: (book: BookType) => void;
  addRead: (book: BookType) => void;
  setGlobalState: (state: StateType) => void;
  filter: (genre: string | null) => void;
}

const GlobalState = createContext<GlobalStateType>({
  library: [],
  read: [],
  total: 0,
  nRead: 0,
  genre: new Set<string>(),
  addLibrary: () => {},
  addRead: () => {},
  setGlobalState: () => {},
  filter: () => {},
  origin: "",
  isFilter: [false, ""],
});

export const useGlobalState = () => useContext(GlobalState);

export default GlobalState;
