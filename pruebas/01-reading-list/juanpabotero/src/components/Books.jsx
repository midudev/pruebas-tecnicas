import { useReadingList } from '../hooks/useReadingList';
import { AddBookIcon, BookAddedIcon } from './Icons';
import './Books.css'

export function Books({ books }) {
  const { addToReadingList, removeFromReadingList, readingList } =
    useReadingList();

  const checkBookInReadingList = (product) => {
    return readingList.some((book) => book.id === product.id);
  };

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {books.map(({ book }) => {
        const isBookInReadingList = checkBookInReadingList(book);

        return (
          <article
            key={book.id}
            className="grid relative content-start p-4 max-w-[188px] sm:max-w-[208px]"
          >
            <button
              className={`absolute top-0 right-0 rounded-full p-1 border bg-gray-900 
              hover:scale-110 transition-all duration-200 ${
                isBookInReadingList
                  ? 'text-yellow-500 border-yellow-600'
                  : 'text-blue-500 border-blue-600'
              } add-book-button`}
              onClick={() => {
                isBookInReadingList
                  ? removeFromReadingList(book)
                  : addToReadingList(book);
              }}
            >
              {isBookInReadingList ? <BookAddedIcon /> : <AddBookIcon />}
            </button>
            <img
              className="h-56 sm:h-64 aspect-auto mb-5"
              src={book.cover}
              alt={`Portada de ${book.title}`}
            />
            <h2 className="text-lg font-bold text-white mb-1">
              {book.title}
            </h2>
            <p className="text-gray-200">{book.author.name}</p>
            <p className="text-gray-400 text-sm">{book.genre}</p>
          </article>
        );
      })}
    </section>
  );
}
