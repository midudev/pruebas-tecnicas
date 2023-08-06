import React from "react";

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
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md h-full flex text-black flex-col">
      <h2 className="text-lg font-semibold mb-1 truncate">{book.title}</h2>
      <div className="aspect-w-2 aspect-h-3 mb-2">
        <img
          src={book.cover}
          alt={book.title}
          className="object-cover w-full h-[29em] rounded-md"
        />
      </div>
      <p className="text-gray-600 overflow-hidden overflow-ellipsis h-12">
        {book.synopsis}
      </p>
      <p className="mt-2 text-sm">
        <strong>Autor:</strong> {book.author.name}
      </p>
      <p className="text-sm">
        <strong>Género:</strong> {book.genre}
      </p>
      <button
        onClick={toggleFavorite}
        className={`mt-auto ${
          isFavorite
            ? " bg-gradient-to-r  from-orange-300 via-red-500 to-purple-600 animate-gradient-x"
            : "bg-black"
        } hover:bg-opacity-75 text-white text-xs px-2 py-1 rounded-md`}
      >
        {isFavorite ? "Eliminar" : "Empezar lectura"}
      </button>
    </div>
  );
};

export default BookCard;
