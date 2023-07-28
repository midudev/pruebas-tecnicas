import { useSelector } from "react-redux";

const useRemove = ({ library = [] }) => {
  const { favoriteBooks } = useSelector((state) => state.books);

  //remove favorite books from available books
  const availableBooks = library.filter(
    (book) =>
      !favoriteBooks.some(
        (favoriteBook) => favoriteBook.ISBN === book.book.ISBN
      )
  );

  return { availableBooks };
};

export default useRemove;
