import React from "react";
import "./Book.modules.css";
import { addToRead, removeToRead } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


function Book({ book }) {
  const dispatch = useDispatch();
  const toRead = useSelector((state) => state.toRead);

  function handlerRead(book) {
    // Verificar si el libro ya está en la lista de "Para leer"
    if (toRead.some((item) => item.ISBN === book.ISBN)) {
      // Si está en la lista, lo removemos
      dispatch(removeToRead(book));
    } else {
      // Si no está en la lista, lo añadimos
      dispatch(addToRead(book));
    }
  }

  return (
    <div className="card">
      <div className="divImgBook">
        <img className="imgBook" src={book.cover} alt={book.title} />
      </div>

      <p>{book.genre}</p>
      {/* Botón para añadir o eliminar el libro de la lista de "Para leer" */}
      <button onClick={() => handlerRead(book)}>
        {/* Mostramos un icono de "+" si el libro no está en la lista, o una "x" si ya está */}
        {toRead.some((item) => item.ISBN === book.ISBN) ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#006663"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" fill="#006663"></circle>
            <line x1="8" y1="8" x2="16" y2="16" stroke="#f5f5f5"></line>
            <line x1="8" y1="16" x2="16" y2="8" stroke="#f5f5f5"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="##00B3AD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" fill="#006663"></circle>
            <line x1="12" y1="16" x2="12" y2="8" stroke="#f5f5f5 "></line>
            <line x1="8" y1="12" x2="16" y2="12" stroke="#f5f5f5 "></line>
          </svg>
        )}
      </button>
    </div>
  );
}

export default Book;
