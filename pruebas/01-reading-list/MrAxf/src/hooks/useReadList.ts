import { useContext } from "@builder.io/qwik";
import { ReadListContext } from "~/components/books/read-list-provider";

const useReadList = () => {
  const { readList } = useContext(ReadListContext);
  return readList;
};

export default useReadList;
