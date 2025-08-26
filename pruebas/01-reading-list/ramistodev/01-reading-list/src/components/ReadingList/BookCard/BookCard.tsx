import type { Library } from "../../../types.d";
import { useBookCard } from "./useBookCard";
import { AddIcon, DeleteIcon } from "../../../Icons/Icons";
import { BookList } from "../../../types.d";

export function BookCard() {
  const { books, bookStatus, fadingOut, handleClick } = useBookCard();

  return (
    <section className="sm:[w-full] md:w-[700px] lg:w-[1000px] xl:w-[1200px]">
      <ul
        className={`w-full grid gap-8 p-4 justify-items-center ${books.length > 0 ? "grid-cols-[repeat(auto-fill,minmax(220px,1fr))]" : "grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"}`}
      >
        {books.length > 0 ? (
          books.map((book: Library) => (
            <li
              key={book.book.ISBN}
              className={`group relative max-w-[300px] w-full overflow-hidden rounded-md shadow-transparent shadow-[0_2px_10px_2px] transition duration-[350ms] hover:scale-[1.05] hover:shadow-zinc-950 ${fadingOut === book.book.ISBN ? "opacity-30" : "opacity-100"}`}
            >
              <div
                onClick={() => handleClick(book)}
                className="absolute w-full h-full z-20 flex flex-col justify-center items-center gap-10 backdrop-blur-sm bg-black/30 opacity-0 cursor-pointer select-none hover:opacity-100 transition-opacity duration-300"
              >
                {bookStatus === BookList.AVAILABLE ? (
                  <AddIcon />
                ) : (
                  <DeleteIcon />
                )}
                <p className="font-semibold text-lg">
                  {bookStatus === BookList.AVAILABLE
                    ? `Añadir a la lista de lectura`
                    : `Eliminar de la lista de lectura`}
                </p>
              </div>
              <article className="flex flex-col w-full h-full bg-slate-950 select-none">
                <div className="relative w-full aspect-[9/14] flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                    src={book.book.cover}
                    alt={book.book.title}
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-gray-800 text-white text-lg md:text-sm px-2 py-1 rounded">
                    {book.book.genre}
                  </span>
                </div>
                <div className="flex flex-col items-start flex-1 p-4 gap-2">
                  <h3 className="text-left text-2xl md:text-lg font-bold text-white line-clamp-2">
                    {book.book.title}
                  </h3>
                  <p className="text-xl md:text-sm text-zinc-300 mb-1">
                    {book.book.author.name}
                  </p>
                  <div className="w-full flex items-center justify-between mt-auto">
                    <span className="text-lg md:text-xs text-zinc-400">
                      {book.book.year}
                    </span>
                    <span className="text-lg md:text-xs text-zinc-400">
                      {book.book.pages} pág.
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))
        ) : (
          <p>
            No se han encontrado libros que coincidan con tus criterios de
            búsqueda.
          </p>
        )}
      </ul>
    </section>
  );
}
