import React from "react";
import { useState, useEffect } from "react";
import "./ReadBooks.css";
import data from "../../books.json";

function ReadBooks({ alreadyRead = [], setAlreadyRead }) {
  const books = data.library;
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleOnDrop = (event) => {
    if (localStorage.getItem("dragging")) {
      setAlreadyRead([...alreadyRead, localStorage.getItem("dragging")]);
    }
  };

  const handleClick = (event) => {
    let ISBN = event.target.parentElement.id;
    console.log("alreadyRead ult", alreadyRead);
    if (alreadyRead.length > 0) {
      setAlreadyRead(alreadyRead.filter((f) => f !== ISBN));
    }
  };

  useEffect(() => {
    setFilteredBooks(books.filter((f) => alreadyRead.includes(f.book.ISBN)));
    console.log("already read books", alreadyRead);
    localStorage.setItem("alreadyRead", JSON.stringify(alreadyRead));
    onstorage = () => {
      setAlreadyRead(JSON.parse(localStorage.getItem("alreadyRead")));
    };
  }, [alreadyRead]);

  useEffect(() => {
    console.log("filtered read books", filteredBooks);
  }, [filteredBooks]);

  return (
    <>
      <div
        className="read-books"
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
      >
        {filteredBooks.map((e) => (
          <div
            id={e.book.ISBN}
            key={e.book.ISBN}
            className="read-book"
            style={{ backgroundImage: "url(" + e.book.cover + ")" }}
          >
            <img
              src={require("../../images/close-button.png")}
              alt="X"
              className="close-button"
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ReadBooks;
