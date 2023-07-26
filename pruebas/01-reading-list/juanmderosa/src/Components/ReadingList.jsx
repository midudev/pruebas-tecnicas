import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const ReadingList = () => {
  const { readingList, handleRemoveFromReadingList } = useContext(BooksContext);

  return (
    <section className="read-list">
      <h2 className="reading-list-title">Lista de Lectura</h2>
      {readingList && readingList.length === 0 ? (
        <p className="reading-list-nobooks">
          Aún no agregaste libros a tu lista
        </p>
      ) : (
        <aside className="books-inReadListContainer">
          {readingList &&
            readingList.map((book) => (
              <article
                key={book.book.ISBN}
                className="book-inReadinList"
              >
                <figure className="book-inReadinList-figure">
                  <img
                    src={book.book.cover}
                    alt={book.book.title}
                    className="book-inReadinList-img"
                  />
                </figure>
                <button
                  onClick={() => handleRemoveFromReadingList(book.book.ISBN)}
                  className="book-inReadinList-deleteBtn"
                >
                  Quitar
                </button>
              </article>
            ))}
        </aside>
      )}
    </section>
  );
};
