import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import { AiFillCheckCircle, AiOutlinePlus } from "react-icons/ai";

/**
 * Componente Book
 * @param {object} book - Objeto que representa un libro con propiedades como cover, title y author.
 * @param {boolean} inList - Indica si el libro está en una lista.
 * @returns {JSX.Element} - Elemento JSX que representa un libro con su información y botón para agregarlo o quitarlo de la lista.
 */
export default function Book({ book, inList }) {
  const { addToList, removeFromList } = useContext(BooksContext);

  return (
    <div className="relative inline-block w-full transform transition-transform duration-300 ease-in-out">
      <div className="rounded-lg">
        <div className="relative flex h-[30rem] md:h-80 justify-center overflow-hidden rounded-lg">
          {/* Imagen */}
          <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
            <img
              src={book.cover}
              className="object-cover w-full h-full"
              draggable="false"
              alt={book.title}
              title={book.title}
              width={300}
              height={450}
            />
          </div>

          {/* Boton de agregar/quitar */}
          <span
            onClick={() => (inList ? removeFromList(book) : addToList(book))}
            className="absolute right-0 top-0 z-10 mr-3 mt-3 inline-flex select-none rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            {inList ? <AiFillCheckCircle /> : <AiOutlinePlus />}
          </span>
        </div>

        {/* Información */}
        <div className="relative flex flex-col items-start justify-start">
          <p
            className={`line-clamp-1 text-base font-bold md:text-lg ${
              inList ? "text-background" : "text-text"
            }`}
            title={book.title}
          >
            {book.title}
          </p>
          <p
            className={`line-clamp-1 text-sm  ${
              inList ? "text-background" : "text-text"
            }`}
            title={book.author.name}
          >
            {book.author.name}
          </p>
        </div>
      </div>
    </div>
  );
}
