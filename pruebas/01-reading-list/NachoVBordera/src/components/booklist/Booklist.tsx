import BookUi from "./Book.ui";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Book } from "../../types";

function BookList() {
  const { filteredBooks } = useContext(BookContext);

  return (
    <>
      <section className="booksListContainer">
        <ul>
          {filteredBooks.map((book: Book) => (
            <li key={book.book.ISBN}>
              <BookUi book={book.book} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default BookList;
