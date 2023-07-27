import "./BookList.css";

import { useEffect, useState } from "react";

import DATA from "../books.json";
import Book from "./Book";
import { Book as BookModel } from "./models/book-model";
import { GENRES } from "./utils";

interface Props {
  readingList: BookModel[];
  onBookSelection: (b: BookModel) => void;
}

function helperGetMessage(books: number, type: "books" | "list") {
  const sentence = type === "books" ? "disponibles" : "en la lista de lectura";
  const bookWord = books === 1 ? "libro" : "libros";
  return books === 0 ? `No hay ${bookWord} ${sentence}` : `${books} ${bookWord} ${sentence}`;
}

function BookList({ readingList, onBookSelection }: Props) {
  const [filter, setFilter] = useState("All");
  const [bookCount, setBookCount] = useState(DATA.library.length - readingList.length);

  const filteredBooks = DATA.library.filter((b) => (filter !== "All" ? b.book.genre === filter : b));

  const handleFilterSelection = (genre: string) => {
    setFilter(genre);
    localStorage.setItem("filter", genre);
  };

  useEffect(() => {
    const localFilter = localStorage.getItem("filter");
    if (localFilter) {
      setFilter(localFilter);
    }
  }, []);

  useEffect(() => {
    if (filter !== "All") {
      const filteredOnReadingList = readingList.filter((r) => r.genre === filter).length;
      setBookCount(filteredBooks.length - filteredOnReadingList);
    } else {
      setBookCount(DATA.library.length - readingList.length);
    }
  }, [readingList, filteredBooks, filter]);

  return (
    <div className="book-list-container">
      <div className="filters">
        <label>Género</label>
        <button className={filter === "All" ? "filter-btn selected" : "filter-btn"} onClick={() => handleFilterSelection("All")}>
          All
        </button>
        {GENRES.map((genre) => (
          <button key={genre} className={filter === genre ? "filter-btn selected" : "filter-btn"} onClick={() => handleFilterSelection(genre)}>
            {genre}
          </button>
        ))}
        <div className="book-count">
          <span>{helperGetMessage(bookCount, "books")}</span>
          <span>{helperGetMessage(readingList.length, "list")}</span>
        </div>
      </div>
      <section className="all-books">
        {filteredBooks.map((book) => {
          const { id } = book.book;
          return (
            <div key={id} onClick={() => onBookSelection(book.book)}>
              <Book isOnReadingList={readingList.map((b) => b.id).includes(id)} book={book.book} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default BookList;
