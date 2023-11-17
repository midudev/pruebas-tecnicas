import { Book } from "../App";

interface BooksListProps {
  books: Book[];
  addToReadingList: (ISBN: string) => void;
}

function BooksList({ books, addToReadingList }: BooksListProps) {
  if (!books.length) {
    return (
      <div className="no-results">
        <h2>Lo sentimos, no hay resultados disponibles</h2>
      </div>
    );
  }

  return (
    <div className="books">
      {books.map((book) => (
        <div
          role="book"
          key={book.ISBN}
          className="book"
          onClick={() => addToReadingList(book.ISBN)}
        >
          <img src={book.cover} className="book-cover" />
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author.name}</span>
        </div>
      ))}
    </div>
  );
}

export default BooksList;
