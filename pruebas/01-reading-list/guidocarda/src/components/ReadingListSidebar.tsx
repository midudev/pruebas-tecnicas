import { Book } from "../App";

interface ReadingListSidebarProps {
  readingList: Book[];
  removeFromReadingList: (ISBN: string) => void;
}

function ReadingListSidebar({
  readingList,
  removeFromReadingList,
}: ReadingListSidebarProps) {
  const readingListCount = readingList.length;

  return (
    <aside>
      <header className="sidebar-header">
        <h2>Lista de lectura</h2>
        <span>
          {readingListCount
            ? `${readingListCount} ${
                readingListCount === 1 ? "libro agregado" : "libros agregados"
              }`
            : "aun no agregaste libros"}
        </span>
      </header>

      <div className="reading-list">
        {readingListCount
          ? readingList.map((book) => (
              <div key={book.ISBN} className="book">
                <img src={book.cover} className="book-cover" />
                <span className="book-title">{book.title}</span>
                <span className="book-author">{book.author.name}</span>
                <button
                  className="remove-book"
                  onClick={() => removeFromReadingList(book.ISBN)}
                >
                  x
                </button>
              </div>
            ))
          : null}
      </div>
    </aside>
  );
}

export default ReadingListSidebar;
