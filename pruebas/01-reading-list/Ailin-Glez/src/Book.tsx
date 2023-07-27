import "./Book.css";

import bookmark from "./assets/bookmark.svg";
import { Book } from "./models/book-model";

interface Props {
  book: Book;
  isOnReadingList: boolean;
}

function Book({ book, isOnReadingList }: Props) {
  const { title, genre, cover, author, pages, year, synopsis } = book;

  return (
    <>
      <div className={isOnReadingList ? "book-container selected" : "book-container flip-card"}>
        {isOnReadingList && (
          <div className="cover-color">
            <img src={bookmark} className="bookmark" alt="bookmark" />
            <p>En lista de lectura</p>
          </div>
        )}
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="img-container">
              <img src={cover} alt="book cover" />
            </div>
            <div className="book-content">
              <h3>{title}</h3>
              <p className="author">{author.name}</p>
              <span className="genre">{genre}</span>
            </div>
          </div>
          <div className="flip-card-back">
            <h3 className="back-title">{title}</h3>
            <p className="synopsis">{synopsis}</p>
            <span>{pages} páginas</span>
            <span>Año {year}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
