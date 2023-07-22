import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { libraryData } from '@data/library';

interface Props {
  params: { id: string };
}

export default function BookDetail({ params: { id } }: Props) {
  const book = libraryData.find(({ book }) => book.ISBN === id)?.book;
  if (!book) return <h1>Book not found</h1>;
  return (
    <>
      <Header />
      <main className="grid items-center p-8">
        <div className="flex flex-col gap-8 m-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl dark:border-gray-700 dark:bg-gray-800 p-4">
          <img
            alt={book.title}
            src={book.cover}
            className="object-cover rounded-t-lg rounded-lg max-h-[500px]"
          />
          <div className="flex flex-col gap-4">
            <p className="text-3xl">
              <strong className="text-white">Título:</strong>&nbsp;
              <span className="text-gray-400">{book.title}</span>
            </p>
            <p className="text-3xl">
              <strong className="text-white">Autor:</strong> &nbsp;
              <span className="text-gray-400">{book.author.name}</span>
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <strong className="text-xl text-white whitespace-nowrap">Otros libros del autor:&nbsp;</strong>
              <div className="flex flex-wrap gap-2">
                {book.author.otherBooks.length > 0 ? (
                  book.author.otherBooks.map((item) => (
                    <span
                      className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
                      key={item}
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-yellow-500">No hay otros libros del autor</span>
                )}
              </div>
            </div>
            <p className="text-lg">
              <strong className="text-white">Género:</strong>&nbsp;
              <span className="text-gray-400">{book.genre}</span>
            </p>
            <p className="text-lg">
              <strong className="text-white">Sinopsis:</strong>&nbsp;
              <span className="text-gray-400">{book.synopsis}</span>
            </p>
            <p className="text-lg">
              <strong className="text-white">ISBN:</strong>&nbsp;
              <span className="text-gray-400">{book.ISBN}</span>
            </p>
            <p className="text-lg">
              <strong className="text-white">Año de publicación:</strong>&nbsp;
              <span className="text-gray-400">{book.year}</span>
            </p>
            <p className="text-lg">
              <strong className="text-white">Páginas:</strong>&nbsp;
              <span className="text-gray-400">{book.pages}</span>
            </p>
            <Button
              className=" max-w-xs focus:outline-none text-white whitespace-nowrap bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              book={book}
            />
          </div>
        </div>
      </main>
    </>
  );
}
