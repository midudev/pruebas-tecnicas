import { useParams } from 'react-router-dom';

export function Book({ books }) {
  const { id } = useParams();
  const book = books.find((book) => String(book.id) === id);
  return (
    <article className="flex flex-col gap-5 items-center border rounded-lg shadow md:flex-row md:max-w-2xl border-gray-700 bg-gray-800 mx-auto p-4">
      <img
        className="object-contain w-full rounded h-96 md:h-auto md:w-48"
        src={book.cover}
        alt={book.title}
      />
      <div className="flex flex-col justify-between leading-normal">
        <h5 className="mb-1 text-2xl md:text-3xl font-bold tracking-tight text-white">
          {book.title}
        </h5>
        <p className="mb-6 text-gray-400">
          <span className="font-bold">Por:</span> {book.author.name}
        </p>
        <p className="mb-6 text-white text-lg leading-snug">{book.synopsis}</p>
        <p className="text-gray-400">
          <span className="font-bold">Género:</span> {book.genre}
        </p>
        <p className="text-gray-400">
          <span className="font-bold">No. de páginas:</span> {book.pages}
        </p>
        <p className="mb-6 text-gray-400">
          <span className="font-bold">Año:</span> {book.year}
        </p>
        <p className="text-gray-400">
          <span className="font-bold">Más libros de {book.author.name}:</span>
        </p>
        <p className="text-gray-400">
          {book.author.otherBooks.length === 0 ? (
            <span key={book.id}>No hay más libros disponibles del autor</span>
          ) : (
            book.author.otherBooks.map((otherBook, index) => {
              return <span key={index}>{otherBook}, </span>;
            })
          )}
        </p>
      </div>
    </article>
  );
}
