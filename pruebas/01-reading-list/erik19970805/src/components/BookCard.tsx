import { type ILibrary } from '@interfaces/library';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import { Button } from './Button';

export const BookCard: FC<ILibrary> = ({ book }) => {
  return (
    <div className="card bg-gray-800 max-w-xs p-6 gap-4">
      <Image
        className="object-cover h-60 w-full"
        src={book.cover}
        alt={book.title}
        width={300}
        height={300}
        loading="lazy"
      />
      <div className="card-body p-0">
        <h2 className="card-title">{book.title}</h2>
        <p>{book.synopsis}</p>
        <div className="card-actions justify-center">
          <Button className="btn-sm rounded btn-secondary flex-1 py-1 whitespace-nowrap" book={book} />
          <Link
            as={`/book/${book.ISBN}`}
            href={`/book/${book.ISBN}`}
            className="flex items-center justify-center btn-sm rounded btn-primary flex-1 py-1 whitespace-nowrap"
          >
            Detalles libro
          </Link>
        </div>
      </div>
    </div>
  );
};
