import React from "react";
import BooksToRead from "../BooksToRead/BooksToRead";
import BooksDisponibility from "../Disponibility/BooksDisponibility";
import "./BookList.modules.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function BooksList({ books, toRead }) {
  const { counterToRead } = useSelector((state) => state);

  return (
    <div className="viewList">
      <BooksDisponibility books={books} />
      <BooksToRead
        toRead={toRead}
        hidden={counterToRead === 0}
        className="oc"
      />
    </div>
  );
}

export default BooksList;
