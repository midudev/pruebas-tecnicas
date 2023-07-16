import { type IBook } from '@interfaces/library';
import Image from 'next/image';
import { type FC } from 'react';
import { Button } from './Button';
import { Loading } from './Loading';

interface Props {
  books: IBook[];
  loading: boolean;
}

export const BookCart: FC<Props> = ({ books, loading }) => {
  return (
    <div className="grid gap-4">
      {!loading ? (
        books.map((book) => (
          <div key={book.ISBN} className="card card-side bg-gray-800 w-60">
            <Image
              className="object-cover w-auto h-auto"
              src={book.cover}
              alt={book.title}
              loading="lazy"
              width={50}
              height={50}
            />
            <div className="card-body">
              <h2 className="card-title text-sm">{book.title}</h2>
              <p className='text-xs'>{book.synopsis}</p>
              <div className="card-actions">
                <Button className="btn-sm rounded btn-secondary whitespace-nowrap" book={book} type="remove">
                  Eliminar Libro
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
