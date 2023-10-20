import { FC } from 'react';
import { Genre } from './Genre/Genre';
import { Pages } from './Pages/Pages';
import { useBooksStore } from '../../store/store';

export const Filter: FC = () => {
  const booksStore = useBooksStore();
  const { books, lectures } = booksStore;

  return (
    <aside className='w-full max-w-[220px]'>
      <Genre />
      <Pages />
      <div className='pt-4'>
        <p className='text-gray-600'>
          <span className='font-bold text-black/70'>{books.length}</span> libros disponibles{' '}
        </p>
        <p className='text-gray-600'>
          <span className='font-bold text-black/70'>{lectures.length}</span> libros en lectura
        </p>
      </div>
    </aside>
  );
};
