import { useContext, useState } from 'react';
import { readingListContext } from '../Context/ReadingListProvider';
import AvailableBookCard from './AvailableBookCard';
import Filters from './Filters';

function AvailableBooks({ books }) {
  const [availablesBooks, setAvailablesBooks] = useState(books);
  const { readingList } = useContext(readingListContext);

  return (
    <section className='flex flex-col gap-2 items-center md:w-[65%] p-6'>
      <div className='grid place-content-center gap-2 z-10 sticky top-0 backdrop-blur-xl w-full rounded-b-xl py-2'>
        {' '}
        <h3 className="text-3xl w-full font-bold text-center relative after:content-[''] after:absolute after:w-[90%] after:h-6 after:bg-sky-600/40 after:left-4 after:-bottom-1 after:-z-10 ">
          Libros Disponibles
        </h3>
        <p className='text-center opacity-60 font-medium'>
          <span className='font-bold text-xl text-sky-600'>
            {books.length - readingList.length}
          </span>{' '}
          libros esperan por ti 🙂 <br />
          Tienes{' '}
          <span className='font-bold text-xl text-sky-600'>
            {readingList.length}
          </span>{' '}
          libros en tu lista de lectura{' '}
          {readingList.length === 0
            ? '😕'
            : readingList.length === books.length
            ? '😎'
            : '🥳'}
        </p>
      </div>
      <Filters
        setAvailablesBooks={setAvailablesBooks}
        books={books}
        availablesBooks={availablesBooks}
      />
      <ul className='flex flex-col mt-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:place-content-start gap-10 mx-4'>
        {availablesBooks.map((item) => (
          <AvailableBookCard key={item.book.ISBN} book={item.book} />
        ))}
      </ul>
    </section>
  );
}

export default AvailableBooks;
