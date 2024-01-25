"use client";
import { useBookReading } from "../context/useBookReading";
import { ListIcon } from "../utils/Icons";
export default function BooksNotyfi() {
  // Obtine el numero de libros agregados del context useBookReading
  const { booksCount } = useBookReading();
  const { setOpenCarsList } = useBookReading();
  return (
    <button
      onClick={() => setOpenCarsList(true)}
      href="#"
      className="z-10 fixed cursor-pointer flex gap-1  items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center  mb-2"
    >
      Lista de lectura
      <ListIcon />
      <span className="inline-flex items-center justify-center w-6 h-6 ml-2 text-xs font-semibold text-gray-500 bg-yellow-300 rounded-full">
        {booksCount}
      </span>
    </button>
  );
}
