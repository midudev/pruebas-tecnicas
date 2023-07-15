// import { useState } from "preact/hooks";

import { Book, Library } from "../types";

interface BookProps {
  book: Book;
  setSelected: (libros: Book[]) => void;
  seleccionados: Book[];
  zona: string;
}

export const BookComponent = (props: BookProps) => {
  const { book }: Library = props;

  const handleClick = () => {
    const libros = [...props.seleccionados];
    const index = libros.findIndex((libro: Book) => libro.ISBN === book.ISBN);
    if (props.zona === "estanteria") {
      if (index < 0) libros.push(book);
    } else {
      if (index >= 0) libros.splice(index, 1);
    }
    props.setSelected(libros);
  };

  return (
    <>
      <img src={book.cover} className="bookCover" onClick={handleClick} />
    </>
  );
};
