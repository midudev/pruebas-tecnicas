import React from "react";
import { FlyOut } from "./FlyOut";

export const Book = ({ book, handleAdd, handleRemove }) => {
  return (
    <div
      key={book.title}
      className="w-40 mx-auto rounded-lg relative hover:scale-110 duration-200 shadow-lg"
    >
      <FlyOut>
        <FlyOut.Toggle />
        <FlyOut.List>
          {handleAdd && (
            <FlyOut.Item handleClick={() => handleAdd(book)}>
              Agregar a lectura
            </FlyOut.Item>
          )}
          {handleRemove && (
            <FlyOut.Item handleClick={() => handleRemove(book)}>
              Eliminar de lectura
            </FlyOut.Item>
          )}
        </FlyOut.List>
      </FlyOut>
      <img
        src={book.cover}
        className="rounded-lg object-fit"
        alt={`Cover image from ${book.title} book`}
      />
    </div>
  );
};

export default Book;
