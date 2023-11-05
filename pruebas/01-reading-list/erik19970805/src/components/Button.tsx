'use client';
import useBook from '@/hooks/useBook';
import { type IBook } from '@interfaces/library';
import { type FC, type PropsWithChildren } from 'react';

interface Props {
  className?: string;
  book: IBook;
  type?: 'add' | 'remove';
}

export const Button: FC<PropsWithChildren<Props>> = ({ className, children, book, type = 'add' }) => {
  const { addBook, removeBook } = useBook();
  return (
    <button
      className={className}
      onClick={() => {
        type === 'add' && addBook(book);
        type === 'remove' && removeBook(book);
      }}
    >
      {children ?? 'Añadir libro'}
    </button>
  );
};
