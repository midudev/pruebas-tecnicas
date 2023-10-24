import React from "react";
import FavoriteBook from "./FavoriteBook";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/bookSlice";
import "./index.css";

const ReadList = ({ books }) => {
  const dispatch = useDispatch();

  const onHandleChange = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <section className="favoritesBooks">
      {books.map((book) => (
        <FavoriteBook
          key={book.ISBN}
          url={book.cover}
          title={book.title}
          onHandleChange={() => onHandleChange(book.ISBN)}
        />
      ))}
    </section>
  );
};

export default ReadList;
