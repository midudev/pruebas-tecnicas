import {
  filterAvailable,
  type GlobalStateType,
  type StateType,
} from "@/types/context";
import { createContext, useContext } from "react";

export const dataDefault: StateType = {
  library: [],
  read: [],
  total: 0,
  nRead: 0,
  genre: {},
  max: 0,
  min: 0,
  origin: "",
  isFilter: [filterAvailable.NOT, {}],
};

const GlobalState = createContext<GlobalStateType>({
  data: dataDefault,
  addLibrary: () => {},
  addRead: () => {},
  setFromJson: () => {},
  setGlobalState: () => {},
  filter: () => {},
});

export const useGlobalState = () => useContext(GlobalState);

export default GlobalState;
