import BookUi from "./Book.ui";
import { UseBookList } from "../../hooks/UseBooksList";

function BookList() {
  const { filteredBooks } = UseBookList();

  return (
    <>
      <h2>List of Books</h2>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.book.ISBN}>
            <BookUi book={book.book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
