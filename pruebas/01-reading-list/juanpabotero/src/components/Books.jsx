import { useReadingList } from '../hooks/useReadingList';
import { AddBookIcon, BookAddedIcon } from './Icons';

export function Books({ books }) {
  const { addToReadingList, removeFromReadingList, readingList } =
    useReadingList();

  const checkBookInReadingList = (product) => {
    return readingList.some((book) => book.id === product.id);
  };

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map(({ book }) => {
        const isBookInReadingList = checkBookInReadingList(book);

        return (
          <article
            key={book.id}
            className="grid relative justify-center content-start rounded p-4 m-4 max-w-[256px]"
          >
            <button
              className={`absolute top-0 right-0 rounded-full p-1 border bg-gray-900 ${
                isBookInReadingList
                  ? 'text-yellow-500 border-yellow-600'
                  : 'text-blue-500 border-blue-600'
              }`}
              onClick={() => {
                isBookInReadingList
                  ? removeFromReadingList(book)
                  : addToReadingList(book);
              }}
            >
              {isBookInReadingList ? <BookAddedIcon /> : <AddBookIcon />}
            </button>
            <img
              className="h-72 aspect-auto mb-5 justify-self-center"
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
