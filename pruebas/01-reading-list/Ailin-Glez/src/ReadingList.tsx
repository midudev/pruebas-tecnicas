import "./ReadingList.css";

import trashIcon from "./assets/trash.svg";
import Book from "./Book";

interface Props {
  books: Book[];
  onDeleteFromReadingList: (id: number) => void;
  onClearList: () => void;
}
function ReadingList({ books, onDeleteFromReadingList, onClearList }: Props) {
  if (books.length === 0) return <h2 className="no-reading-list">Sin libros en la lista de espera</h2>;

  return (
    <aside className="reading-list">
      <h2 className="reading-list-header">Lista de lectura</h2>
      <button className="reading-list-btn" onClick={onClearList}>
        <img src={trashIcon} alt="trash icon" />
        Vaciar lista
      </button>
      {books.map((book) => (
        <div key={book.id} className="reading-list-container">
          <button className="x-btn" onClick={() => onDeleteFromReadingList(book.id)}>
            X
          </button>
          <img src={book.cover} className="reading-list-cover" alt="book cover" />
        </div>
      ))}
    </aside>
  );
}

export default ReadingList;
