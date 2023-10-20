import { FC } from 'react';
import { Input } from '../Input/Input';
import { BsSearch } from 'react-icons/bs';
import { useBooksStore } from '../../store/store';

export const Header: FC = () => {
  const booksStore = useBooksStore();
  const { view, changeView, handleSearch } = booksStore;
  const searchBook = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <header className='border-b-[2px] w-full flex justify-between py-5 px-6'>
      <article className='flex items-center gap-x-6'>
        <p className='uppercase font-bold text-lg'>Libreria</p>
        <div className='flex gap-x-2'>
          <button
            className={view === 'books' ? ' text-blue-500 font-semibold' : 'text-slate-700'}
            onClick={() => changeView('books')}
          >
            Libros
          </button>{' '}
          <button
            className={view === 'lectures' ? 'text-blue-500 font-semibold' : 'text-slate-700'}
            onClick={() => changeView('lectures')}
          >
            Lectura
          </button>
        </div>
      </article>
      <Input placeholder='Buscar libro..' change={searchBook}>
        <BsSearch />
      </Input>
    </header>
  );
};
