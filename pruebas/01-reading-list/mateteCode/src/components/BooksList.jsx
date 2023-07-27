import { useEffect } from "react";
import { useAppContext } from "../AppProvider";
import Book from "./Book";
const BooksList = ({ list, filter = null }) => {
  const { dispatch, booksAvailable } = useAppContext();
  const type =
    list === booksAvailable ? "ADD_BOOK_TO_READ" : "REMOVE_BOOK_TO_READ";

  return (
    <ul className="books">
      {list.map((item) => (
        <Book
          book={item}
          key={item.book.ISBN}
          onClick={() => dispatch({ type: `${type}`, value: item })}
        />
      ))}
    </ul>
  );
};
export default BooksList;
