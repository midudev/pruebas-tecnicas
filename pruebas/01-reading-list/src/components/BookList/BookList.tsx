import BookComponent from "../Book/Book";
import { BookWithReadList } from "../../types";

interface BookListProps {
  books: BookWithReadList[];
  readList: BookWithReadList[];
  onAddToReadList: (book: BookWithReadList) => void;
  onRemoveFromReadList: (book: BookWithReadList) => void;
}

const BookList = ({
  books,
  readList,
  onAddToReadList,
  onRemoveFromReadList,
}: BookListProps) => {

  const availableBooks =
    books.length > 0 ? (
      books.map((book) => (
        <BookComponent
          key={book.title}
          book={book}
          onAddToReadList={onAddToReadList}
          onRemoveFromReadList={onRemoveFromReadList}
        />
      ))
    ) : (
      <p className="no-books-message">No books available</p>
    );

  const readListBooks =
    readList.length > 0 ? (
      readList.map((book) => (
        <BookComponent
          key={book.title}
          book={book}
          onAddToReadList={onAddToReadList}
          onRemoveFromReadList={onRemoveFromReadList}
        />
      ))
    ) : (
      <p className="no-books-message">Read List is empty</p>
    );

  return (
    <section className="app-container">
      <div className="available-books">
        <h1>Available Books</h1>
        <div className="book-list">{availableBooks}</div>
      </div>
      <div className="read-list-container">
        <div className="read-list">
          <h1>Read List</h1>
          <div className="read-list-item">{readListBooks}</div>
        </div>
      </div>
    </section>
  );
};

export default BookList;
