import type { GlobalStateType, StateType } from "@/types/context";
import { createContext, useContext } from "react";

export const dataDefault: StateType = {
  library: [],
  read: [],
  total: 0,
  nRead: 0,
  genre: {},
  origin: "",
  isFilter: [false, ""],
};

const GlobalState = createContext<GlobalStateType>({
  data: dataDefault,
  addLibrary: () => {},
  addRead: () => {},
  setGlobalState: () => {},
  filter: () => {},
});

export const useGlobalState = () => useContext(GlobalState);

export default GlobalState;
