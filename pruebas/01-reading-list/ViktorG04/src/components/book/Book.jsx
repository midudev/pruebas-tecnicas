import React from "react";
import "./index.css";

const Book = ({ url, title, onHandleDetails }) => {
  return (
    <img className="image" src={url} alt={title} onClick={onHandleDetails} />
  );
};

export default Book;
