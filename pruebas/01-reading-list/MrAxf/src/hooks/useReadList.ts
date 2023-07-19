import { useContext } from "@builder.io/qwik";
import { BooksInMyListContext } from "~/components/books/books-in-my-list-provider";

const useReadList = () => {
  const { booksInMyList } = useContext(BooksInMyListContext);
  return booksInMyList;
};

export default useReadList;
