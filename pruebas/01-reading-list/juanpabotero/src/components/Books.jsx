import { library } from '../mocks/books.json';

/* eslint-disable react/prop-types */
export function Books() {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {library.map(({ book }, index) => (
        <article
          key={index}
          className="grid place-content-center place-items-center rounded p-4 m-4 max-w-md"
        >
          <img
            className="w-44 aspect-auto mb-5"
            src={book.cover}
            alt={`Portada de ${book.title}`}
          />
          <h2 className="text-xl font-bold text-center text-white mb-1">
            {book.title}
          </h2>
          <p className="text-center text-gray-300">{book.author.name}</p>
        </article>
      ))}
    </section>
  );
}
