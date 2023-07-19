"use client";
import { useState } from "react";
import { useBooksData } from "../context/useBooks";
import { useClickOutside } from "../hook/useClickOutside";
import { BookIcon, XSAMPAIcon } from "../utils/Icons";
export default function Filter() {
  // Declaramos el estado isOpen y su función de actualización setOpen, inicialmente en false
  const [isOpen, setOpen] = useState(false);

  // Extraemos las funciones y variables necesarias del constext personalizado useBooksData
  const { selectedGenre, setSearchBooks, setSelectedGenre, uniqueGenre } =
    useBooksData();

  // Definimos la función onClickSetGenre que se ejecutará al hacer clic en un género
  const onClickSetGenre = (list) => {
    // Actualizamos el género seleccionado
    setSelectedGenre(list);
    // Limpiamos el campo de búsqueda de libros
    setSearchBooks("");
    // Cambiamos el estado de isOpen a su valor opuesto (si estaba abierto, lo cerramos y viceversa)
    setOpen(!isOpen);
  };

  // Definimos la función handleClose que se ejecutará al hacer clic fuera del menú desplegable
  const handleClose = () => {
    // Cambiamos el estado de isOpen a false para cerrar el menú desplegable
    setOpen(false);
  };

  // Usamos el Hook personalizado useClickOutside para detectar clics fuera del menú desplegable
  // Pasamos handleClose como el callback que se ejecutará cuando se detecte un clic fuera
  const ref = useClickOutside(handleClose);
  return (
    <>
      <button
        onClick={() => setOpen(!isOpen)}
        className="inline-flex justify-between w-full px-3 py-2 text-sm font-normal text-center text-gray-900 rounded-lg bg-slate-200 md:w-56 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
      >
        <BookIcon />
        <div className="flex items-center">
          {selectedGenre ? selectedGenre : "Todos"}
        </div>
        <XSAMPAIcon />
      </button>
      {isOpen && (
        <div
          ref={ref}
          id="dropdown"
          className="absolute z-10 translate-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {uniqueGenre?.map((Genre) => (
              <li key={Genre}>
                <button
                  onClick={() => onClickSetGenre(Genre)}
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {Genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
