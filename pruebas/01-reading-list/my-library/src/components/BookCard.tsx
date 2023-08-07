import React from "react";
import Atropos from "atropos/react";
import "atropos/css";
interface BookCardProps {
  book: {
    title: string;
    cover: string;
    synopsis: string;
    author: {
      name: string;
    };
    genre: string;
  };
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  isFavorite,
  toggleFavorite,
}) => {
  const titleFontSize = book.title.length > 30 ? "text-lg" : "text-2xl";
  return (
    <div className="mb-4 max-w-sm m-auto p-4  rounded-lg shadow-md h-full flex text-black flex-col">
      <h2
        className={`py-[1em] text-white m-auto font-semibold mb-1 truncate ${titleFontSize}`}
      >
        {book.title}
      </h2>
      <div className="aspect-w-2 aspect-h-3 mb-2">
        <Atropos>
          <div className="relative h-[28em] cursor-pointer rounded-e-lg bg-violet-700">
            <img
              src={book.cover}
              alt={book.title}
              className="object-cover absolute top-2 left-2 w-full h-[29em] rounded-md"
            />
          </div>
        </Atropos>
      </div>
      <p className="text-gray-400 overflow-hidden overflow-ellipsis h-12">
        {book.synopsis}
      </p>
      <p className="mt-2 text-sm text-white">
        <strong>Autor:</strong> {book.author.name}
      </p>
      <p className="text-sm ">
        <strong>Género:</strong> {book.genre}
      </p>
      <button
        onClick={toggleFavorite}
        className={`mt-auto ${
          isFavorite
            ? "bg-gradient-to-tl from-red-500 to-red-700 "
            : " bg-gradient-to-tl from-violet-700 to-violet-500"
        } mr-3 focus:outline-none active:outline-none inline-block px-7 py-4 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-sm ease-soft-in tracking-normal shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white`}
      >
        {isFavorite ? "Eliminar" : "Empezar lectura"}
      </button>
    </div>
  );
};

export default BookCard;
