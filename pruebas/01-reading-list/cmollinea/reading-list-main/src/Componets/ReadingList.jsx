import { useContext } from 'react';
import { readingListContext } from '../Context/ReadingListProvider';
import { MdOutlineClose } from 'react-icons/md';
import ReadingListCard from './ReadingListCard';

function ReadingList({ modalIsOpen, setModalIsOpen }) {
  const { readingList } = useContext(readingListContext);

  return (
    <section
      id='modal'
      className={`flex flex-col z-10 gap-2 items-center shadow-black/50 shadow-inner bg-slate-800/20 rounded-lg transition-all duration-200 fixed left-[65%] overflow-y-auto md:px-2 md:mt-6 md:mr-6 md:w-[30%] bottom-10 top-20 max-md:top-0 max-md:bottom-0 max-md:right-0 max-md:z-50 max-md:backdrop-blur-lg max-md:bg-black/50 ${
        modalIsOpen
          ? 'max-md:left-0 max-md:right-0'
          : ' max-md:left-full max-md:overflow-hidden max-md:opacity-0'
      }`}
    >
      <button
        onClick={() => setModalIsOpen((prev) => !prev)}
        className='text-3xl absolute right-4 top-2 hover:text-red-600 transition-colors ease-in cursor-pointer md:hidden'
      >
        <MdOutlineClose />
      </button>
      <h3 className="text-3xl font-bold relative pt-4 max-md:pt-8 text-center after:content-[''] after:absolute after:w-full after:h-6 after:bg-sky-600/40 after:left-0 after:-bottom-1 after:-z-10">
        Lista de Lectura
      </h3>
      {readingList.length > 0 ? (
        <>
          <ul className='grid max-md:grid-cols-2 lg:grid-cols-2 2xl:flex 2xl:flex-wrap p-4 gap-8 mt-8'>
            {readingList.map((book) => (
              <ReadingListCard key={book.ISBN} book={book} />
            ))}
          </ul>
        </>
      ) : (
        <h4 className='text-lg my-auto px-8'>
          Aún no has agregado ningún libro a tu lista. <br />
          ¿Qué esperas? <br />
          <span className='text-3xl text-sky-600'>Comienza a leer hoy!</span>
        </h4>
      )}
    </section>
  );
}

export default ReadingList;
