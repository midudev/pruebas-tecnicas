import { useAppContext } from "../AppProvider";
import Book from "./Book";
const BooksList = ({ list, filter = null }) => {
  const { dispatch, booksAvailable } = useAppContext();
  const type =
    list === booksAvailable ? "ADD_BOOK_TO_READ" : "REMOVE_BOOK_TO_READ";
  if (filter)
    list = list.filter((item) => {
      if (filter.genre !== "Todos" && item.book.genre !== filter.genre) {
        return false;
      } else if (
        item.book.pages < filter.pages.min ||
        item.book.pages > filter.pages.max
      ) {
        return false;
      }
      return true;
    });
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
