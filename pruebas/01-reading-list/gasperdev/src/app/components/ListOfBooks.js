"use client";
import { useBooksData } from "../context/useBooks";
import Skeleton from "../utils/Skeleton";
import ButtonAdd from "./ButtonAdd";
import Link from "next/link";
import ImageBooks from "./ImageBooks";
import ButtonDelete from "./BottonDelete";
import { useBookReading } from "../context/useBookReading";

export default function ListOfBooks() {
  // Extraemos los valores de allBooks e isLoading del context personalizado useBooksData
  const { allBooks, isLoading } = useBooksData();

  // Extraemos las funciones addBook, removeBook y la variable booksId del context personalizado useBookReading
  const { addBook, removeBook, booksId } = useBookReading();

  // El componente retorna a continuación
  return (
    <>
      {/* Verificamos si los datos aún se están cargando */}
      {isLoading ? (
        <>
          {/* Si los datos están cargando, mostramos el componente Skeleton (presumiblemente es una animación o indicador de carga)*/}
          <Skeleton />
        </>
      ) : (
        <section className="grid grid-cols-1 gap-6 mt-6 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allBooks.map((res) => (
            <article key={res.book.ISBN}>
              <div className="p-3 mx-auto duration-100 bg-white shadow-lg w-60 h-96 md:w-52 md:h-72 sm:h-72 sm:w-52 rounded-xl dark:bg-gray-900 dark:hover:bg-gray-800 hover:shadow-xl hover:transform hover:scale-105">
                <Link href={`/books/${res.book.ISBN}`}>
                  <ImageBooks url={res.book.cover} alt={res.book.title} />
                </Link>
              </div>
              <footer className="bottom-0 left-0 right-0 grid grid-cols-1 gap-2 p-2 mt-0 h-88">
                <h2 className="text-md">
                  <span className=" text-violet-500">Autor: </span>
                  <span className="text-black dark:text-gray-200">
                    {res.book.author.name}
                  </span>
                </h2>

                <p>
                  <span className="mt-1 text-sm text-violet-500">Año:</span>
                  <span className="text-black dark:text-gray-200">
                    {res.book.year}
                  </span>
                </p>

                {!booksId.includes(res.book.ISBN) ? (
                  <ButtonAdd
                    title={"Añadir a Lista"}
                    onClick={() => addBook(res.book.ISBN)}
                  />
                ) : (
                  <ButtonDelete
                    title={"Remover"}
                    onClick={() => removeBook(res.book.ISBN)}
                  />
                )}
              </footer>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
