"use client";
import ButtonAdd from "./ButtonAdd";
import { useBooksData } from "../context/useBooks";
import Skeleton from "../utils/Skeleton";
import OtherBooks from "./OtherBooks";
import ImageBooks from "./ImageBooks";
import ButtonDelete from "./BottonDelete";
import { useBookReading } from "../context/useBookReading";

export default function BooksCards({ params }) {
  // Extraer el valor de Id de los parámetros de ruta
  const { Id } = params;
  // Usar el context useBooksData para obtener todos los libros
  const { allBooks } = useBooksData();
  // Usar el context useBookReading para obtener funciones y datos relacionados con la lectura de libros
  const { addBook, removeBook, booksId } = useBookReading();
  // Encontrar el libro específico con el ISBN igual al valor de Id
  const response = allBooks.find((r) => r.book.ISBN === Id);
  // Si no se encuentra el libro, mostrar un Skeleton o componente de carga
  if (!response) {
    return <Skeleton />;
  }
  // Desestructurar las propiedades del libro encontrado para su uso en el componente
  const { title, synopsis, cover, author, year, pages } = response.book;
  return (
    <article>
      <section className="flex flex-col items-center justify-center text-gray-700 md:flex-row dark:text-white">
        <div className="mb-0 mr-4 mt-11 md:mb-9">
          <h1 className="text-5xl font-bold font-dark">{title}</h1>

          <p className="mt-4 font-light leading-normal text-md md:text-xl">
            {synopsis}
          </p>
          <section className="my-4">
            <div className="flex items-center ">
              <span className="mr-2 text-blue-400">Autor:</span>
              <h2 className="text-lg font-semibold">{author.name}</h2>
            </div>

            <div className="flex items-center">
              <span className="mr-2 text-blue-400">Año:</span>
              <h2 className="text-lg font-semibold">{year}</h2>
            </div>

            <div className="flex items-center">
              <span className="mr-2 text-blue-400">Páginas:</span>
              <h2 className="text-lg font-semibold">{pages}</h2>
            </div>
          </section>

          {!booksId.includes(Id) ? (
            <ButtonAdd title={"Añadir a Lista"} onClick={() => addBook(Id)} />
          ) : (
            <ButtonDelete title={"Remover"} onClick={() => removeBook(Id)} />
          )}
        </div>
        <div className="p-3 w-52 h-80 md:w-60 md:h-72 sm:h-72 sm:w-44 ">
          <ImageBooks url={cover} alt={title} />
        </div>
      </section>
      <footer>
        <p className="font-bold text-center text-gray-500 text-md dark:text-slate-300">
          "Si te ha gustado este titulo del autor y estás buscando más, te
          recomendamos explorar estos libros"
        </p>

        <div className="w-full border-2 border-dashed mt-9 border-sky-900">
          <OtherBooks author={author} />
        </div>
      </footer>
    </article>
  );
}
