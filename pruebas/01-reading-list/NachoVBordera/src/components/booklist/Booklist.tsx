import BookUi from "./Book.ui";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Book } from "../../types";
import { useBookContext } from "../../context/SavedContext";

function BookList() {
  const { filteredBooks } = useContext(BookContext);
  const { books } = useBookContext();
  const isbnSaved = books.map((book) => book.ISBN);
  const filteredBooksToShow = filteredBooks.filter(
    (book: Book) => !isbnSaved.includes(book.book.ISBN)
  );
  return (
    <>
      <section className="booksListContainer">
        <ul>
          {filteredBooksToShow.map((book: Book) => (
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
