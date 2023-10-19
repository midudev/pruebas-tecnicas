import { useReadingList } from '../hooks/useReadingList';
import {
  AddBookIcon,
  BookAddedIcon,
  RemoveBookIcon,
  SadFaceIcon
} from './Icons';
import '../styles/Books.css';
import { Link } from 'react-router-dom';

export function Books({ books, isReadingListActive }) {
  const { addToReadingList, removeFromReadingList, readingList } =
    useReadingList();

  const checkBookInReadingList = (product) => {
    return readingList.some((book) => book.id === product.id);
  };

  return (
    <>
      {books.length === 0 && (
        <div className="grid gap-2 justify-items-center text-gray-100 mt-10">
          <SadFaceIcon />
          {isReadingListActive ? (
            <p className="text-center">
              Aún no tienes libros en tu lista. <br /> Prueba agregando uno!
            </p>
          ) : (
            <p className="text-center">
              No hay libros disponibles. <br /> Prueba cambiando los filtros.
            </p>
          )}
        </div>
      )}
      <section className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {books.map((book) => {
          const isBookInReadingList = checkBookInReadingList(book);

          return (
            <article
              key={book.id}
              className="grid relative content-start max-w-[160px] sm:max-w-[178px]
              border rounded-lg shadow bg-gray-800 border-gray-700"
            >
              <button
                className={`add-book-button absolute -top-2 -right-1 rounded-full p-1 bg-gray-900 
              hover:scale-110 transition-all duration-200 z-20
              ${
                isReadingListActive
                  ? 'text-red-600'
                  : isBookInReadingList
                  ? 'text-lime-400'
                  : 'text-yellow-400'
              }`}
                aria-label="addBookButton"
                onClick={() => {
                  isBookInReadingList
                    ? removeFromReadingList(book)
                    : addToReadingList(book);
                }}
              >
                {isReadingListActive ? (
                  <RemoveBookIcon />
                ) : isBookInReadingList ? (
                  <BookAddedIcon />
                ) : (
                  <AddBookIcon />
                )}
              </button>
              <Link to={`/book/${book.id}`}>
                <img
                  className="book-cover h-56 sm:h-64 w-full aspect-auto mb-2 rounded-md"
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                />
              </Link>
              <div className="p-2 sm:p-3">
                <Link to={`/book/${book.id}`}>
                  <h2 className="text-lg font-bold text-white mb-1">
                    {book.title}
                  </h2>
                </Link>
                <p className="text-gray-400">{book.author.name}</p>
                <p className="text-gray-400 text-sm">{book.genre}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
