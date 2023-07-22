import { type ILibrary } from '@interfaces/library';
import Link from 'next/link';
import { type FC } from 'react';
import { Button } from './Button';

export const BookCard: FC<ILibrary> = ({ book }) => {
  return (
    <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg object-cover h-48" src={book.cover} alt={book.title} />
      <div className="flex flex-col justify-between h-full gap-4 p-3">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">{book.title}</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">{book.synopsis}</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            className="flex-1 focus:outline-none text-white whitespace-nowrap bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            book={book}
          />
          <Link
            as={`/book/${book.ISBN}`}
            href={`/book/${book.ISBN}`}
            className="flex-1 flex items-center justify-center text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Detalles del libro
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
