import { useContext } from "react";
import LibraryContext from "../context/LibraryProvider";

const useLibrary = () => {
  return useContext(LibraryContext);
};

export default useLibrary;
