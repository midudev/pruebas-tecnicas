import React from "react";
import getAllbooksUseCase from "../../usecases/getAllBooks.usecase";
import { Book } from "../../types";
import BookUi from "./book.ui";

function BookList() {
  const [booklist, setbooklist] = React.useState<Book[]>([]);

  React.useEffect(() => {
    setbooklist(getAllbooksUseCase());
  }, []);
  return (
    <>
      <h2>List of Books</h2>
      <ul>
        {booklist.map((book) => (
          <li key={book.book.ISBN}>
            <BookUi book={book.book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
