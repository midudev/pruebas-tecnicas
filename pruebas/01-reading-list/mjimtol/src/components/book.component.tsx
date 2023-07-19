// import { useState } from "preact/hooks";

import { useEffect, useState } from "preact/hooks";
import { Book, Library } from "../types.d";

interface BookProps {
  book: Book;
  setSelected: (libros: Book[]) => void;
  seleccionados: Book[];
  zona: string;
  addToList: (libro: Book) => void;
  removeFromList: (libro: Book) => void;
}

export const BookComponent = (props: BookProps) => {
  const { book }: Library = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.zona === "estanteria") {
      if (props.seleccionados.includes(book)) setSelected(true);
      else setSelected(false);
    }
  }, [props.seleccionados]);

  const handleClick = () => {
    const libros = [...props.seleccionados];
    const index = libros.findIndex((libro: Book) => libro.ISBN === book.ISBN);
    console.log(index);
    if (props.zona === "estanteria") {
      if (index < 0) props.addToList(book);
    } else {
      if (index >= 0) props.removeFromList(book);
    }
  };

  return (
    <>
      <img
        src={book.cover}
        className={`bookCover ${selected ? "selected" : ""}`}
        onClick={handleClick}
      />
    </>
  );
};
