import useBookContext from '@/hooks/useBookContext';
import { IBook } from '@/types';
import { useEffect, useState } from 'react';

type Props = {
  bookData: IBook;
};

export default function Book({ bookData }: Props) {
  const [rotate, setRotate] = useState(false);
  const [flip, setFlip] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { savedBooks, updateSavedBooks } = useBookContext();

  useEffect(() => {
    const isOnList = savedBooks.some((book) => book.ISBN === bookData.ISBN);
    setIsSaved(isOnList);
  }, [savedBooks, bookData.ISBN]);

  const handleMouseEnter = () => {
    setRotate(true);
  };

  const handleMouseLeave = () => {
    setRotate(false);
  };

  const handleBookClick = () => {
    setFlip(true);
  };

  const handleBookBackClick = () => {
    setFlip(false);
  };

  return (
    <div className="max-w-xs mx-auto">
      <h3 className="text-center font-bold">{bookData.title}</h3>
      <div id="wrap" className="relative aspect-[1/1.5] w-full select-none">
        <div
          id="perspective"
          className="py-6 px-4  perspective overflow-hidden preserve-3d  h-full w-full"
        >
          <div
            id="book-wrap"
            className={`preserve-3d transition-all duration-700  h-full w-full ${
              rotate ? 'rotateY' : ''
            } ${flip ? 'flip' : ''}`}
          >
            <div id="spine-2" className="absolute h-full w-8 bg-gray-300 spine -right-4"></div>
            <figure
              id="book-front"
              onClick={handleBookClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer absolute top-0 left-0 right-0 bottom-0 bg-slate-800 overflow-hidden shadow-lg shadow-gray-600"
            >
              <div className="absolute top-0 left-1 w-3 h-full bg-gradient-to-r from-transparent via-gray-900/20  to-white/5"></div>
              <img
                src={bookData.cover}
                alt={`Portada del libro ${bookData.title} de ${bookData.author}`}
                className="object-cover h-full w-full"
                loading="lazy"
              />
              <div
                id="bookmark"
                className={`z-40 absolute right-4 h-1/5 border-red-600 border-[1.5rem] border-b-transparent transition-all duration-500 ${
                  isSaved ? 'top-0 opacity-100' : '-top-1/4 opacity-0'
                }`}
              ></div>
            </figure>

            <div id="spine" className="absolute h-full w-8 bg-slate-900 spine -left-4"></div>
            <div
              onClick={handleBookBackClick}
              id="book-back"
              className="absolute top-0 bottom-0 left-0 right-0 bg-slate-800 book-back cursor-pointer text-sm select-text"
            >
              <div className="absolute top-0 right-2 w-3 h-full bg-gradient-to-r from-transparent via-gray-900/30  to-white/5 "></div>
              <div className="text w-full h-full text-white p-5 flex flex-col justify-between z-30">
                <div className="flex flex-col gap-4 text-center">
                  <p>{bookData.synopsis}</p>
                  <p>{bookData.author.name}</p>
                </div>
                {bookData.author.otherBooks.length > 0 && (
                  <div className="text-xs">
                    <p>Otros libros de {bookData.author.name}:</p>
                    <ul>
                      {bookData.author.otherBooks.map((book, idx) => (
                        <li key={book + idx + bookData.title}>{book}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex flex-col gap-1 text-xs">
                  <p className="">Páginas: {bookData.pages}</p>
                  <p>Género: {bookData.genre}</p>
                  <p>Año: {bookData.year}</p>
                  <p>ISBN: {bookData.ISBN}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => updateSavedBooks(bookData.ISBN)}
        className="px-3 py-1 mx-auto border border-black rounded-lg block mt-2 hover:bg-black/10 transition-colors duration-300"
      >
        {isSaved ? 'Eliminar de la lista de lectura' : 'Agregar a lista de lectura'}
      </button>
    </div>
  );
}
