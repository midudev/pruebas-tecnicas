import { BookWithReadList } from "../../types";

interface BookProps {
  book: BookWithReadList;
  onAddToReadList: (book: BookWithReadList) => void;
  onRemoveFromReadList: (book: BookWithReadList) => void;
}

const BookComponent = ({
  book,
  onAddToReadList,
  onRemoveFromReadList,
}: BookProps) => {
  const { title, author, genre, pages } = book;
  const isInReadList = book.isInReadList || false;

  return (
    <article className="book">
      <h2>{title}</h2>
      <p>Author: {author.name}</p>
      <p>Genre: {genre}</p>
      <p>Pages: {pages}</p>
      {isInReadList ? (
        <button
          type="button"
          onClick={() => onRemoveFromReadList(book)}
          aria-label="Remove from Read List"
        >
          Remove from Read List
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onAddToReadList(book)}
          aria-label="Add to Read List"
        >
          Add to Read List
        </button>
      )}
    </article>
  );
};

export default BookComponent;
