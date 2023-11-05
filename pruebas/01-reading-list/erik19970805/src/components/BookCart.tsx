import { type IBook } from '@interfaces/library';
import { type FC } from 'react';
import { Button } from './Button';
import { Loading } from './Loading';

interface Props {
  books: IBook[];
  loading: boolean;
}

export const BookCart: FC<Props> = ({ books, loading }) => {
  return (
    <div className="overflow-auto max-h-80 grid gap-4">
      {!loading ? (
        books.map((book) => (
          <div
            key={book.ISBN}
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg h-28 object-cover"
              src={book.cover}
              alt={book.title}
            />
            <div className="flex flex-col gap-4 p-3">
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{book.title}</h2>
                <p className="text-gray-400 text-xs">{book.synopsis}</p>
              </div>
              <Button
                className="whitespace-nowrap focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                book={book}
                type="remove"
              >
                Eliminar Libro
              </Button>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
