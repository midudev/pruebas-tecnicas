// import { useState } from "preact/hooks";

import { useEffect, useState } from "preact/hooks";
import { Book, Library } from "../types.d";

interface BookProps {
  book: Book;
  setSelected: (libros: Book[]) => void;
  seleccionados: Book[];
  zona: string;
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
    if (props.zona === "estanteria") {
      if (index < 0) {
        libros.push(book);
      }
    } else {
      if (index >= 0) {
        libros.splice(index, 1);
      }
    }
    localStorage.setItem("lectura", JSON.stringify(libros));
    props.setSelected(libros);
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
