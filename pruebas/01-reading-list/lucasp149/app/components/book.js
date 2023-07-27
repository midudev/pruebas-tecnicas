"use client";

import { useEffect, useState } from "react";
import books from "../../books.json";
import { UsePersonajeContext } from "./context/context";

export default function Book(props) {
  const context = UsePersonajeContext();

  // this is the book state
  const [book, setBook] = useState({});
  // this is the "selected" filter
  const isSelected = context.librosSeleccionados.includes(props.isbn);

  const library = books.library;

  // asign the selected book from isbn
  useEffect(() => {
    for (let i = 0; i < library.length; i++) {
      if (library[i].book.ISBN === props.isbn) {
        setBook(library[i].book);
      }
    }
  });

  function handleClick() {
    if (context.librosSeleccionados.includes(props.isbn)) {
      context.deleteLibrosSeleccionados(props.isbn);
    } else {
      context.updateLibrosSeleccionados(props.isbn);
    }
  }

  return (
    <div className="group flex flex-col cursor-pointer transition-opacity duration-200 px-1 py-1 ">
      <img className="max-w-s max-h-32 m-0 mx-auto" src={book.cover}></img>
      <div className="w-36">
        <h4 className="text-xs font-semibold  truncate">{book.title}</h4>
        <h3 className="text-xs truncate">{book.author?.name}</h3>
        <h4 className="text-xs truncate">{book.year}</h4>
        <button
          className="flex justify-center items-center text-secondary border border-primary hover:border-secondary  bg-primary focus:outline-none  font-bold text-xs rounded-lg  px-5 py-2.5 mr-2 mb-2 w-full h-5 "
          onClick={handleClick}
        >
          {isSelected ? "Quitar de la lista" : "Agregar a la lista"}
        </button>
      </div>
    </div>
  );
}
