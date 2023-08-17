import { useReadingList } from '../hooks/useReadingList';
import { AddBookIcon, BookAddedIcon } from './Icons';
import '../styles/Books.css';

export function Books({ books }) {
  const { addToReadingList, removeFromReadingList, readingList } =
    useReadingList();

  const checkBookInReadingList = (product) => {
    return readingList.some((book) => book.id === product.id);
  };

  return (
    <section className="grid gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {books.map(({ book }) => {
        const isBookInReadingList = checkBookInReadingList(book);

        return (
          <article
            key={book.id}
            className="grid relative content-start p-4 max-w-[188px] sm:max-w-[208px]"
          >
            <button
              className={`add-book-button absolute top-2 right-2 rounded-full p-1 bg-gray-900 
              hover:scale-110 transition-all duration-200 z-20
              ${isBookInReadingList ? 'text-lime-400' : 'text-yellow-400'}`}
              aria-label="addBookButton"
              onClick={() => {
                isBookInReadingList
                  ? removeFromReadingList(book)
                  : addToReadingList(book);
              }}
            >
              {isBookInReadingList ? <BookAddedIcon /> : <AddBookIcon />}
            </button>
            <img
              className="book-cover h-56 sm:h-64 aspect-auto mb-2 rounded-md"
              src={book.cover}
              alt={`Portada de ${book.title}`}
            />
            <div
              className="book-synopsis absolute top-0 left-0 m-4 h-56 sm:h-64 bg-gray-950/90 
            rounded-md place-content-center hidden transition-all duration-500 z-10 hover:grid"
            >
              <p className="text-sm sm:text-base px-4 py-2 text-gray-50 overflow-hidden">
                {book.synopsis}
              </p>
            </div>
            <h2 className="text-lg font-bold text-white mb-1">{book.title}</h2>
            <p className="text-gray-400">{book.author.name}</p>
            <p className="text-gray-400 text-sm">{book.genre}</p>
          </article>
        );
      })}
    </section>
  );
}
