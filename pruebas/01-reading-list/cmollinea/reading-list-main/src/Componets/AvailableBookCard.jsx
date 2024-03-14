import { useContext } from 'react';
import { readingListContext } from '../Context/ReadingListProvider';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';

function AvailableBookCard({ book }) {
  const { setReadingList, readingList, setStoredList } =
    useContext(readingListContext);

  const isInReadingList = readingList.some((item) => item.title === book.title);

  const handleAddToReadingList = () => {
    setReadingList((prev) => [...prev, book]);
    setStoredList((prev) => [...prev, book]);
  };

  return (
    <li
      className={`w-44 rounded-lg overflow-hidden transition-all flex flex-col ${
        isInReadingList ? 'opacity-30' : ''
      }`}
    >
      <img
        className='h-[250px] w-44 border rounded-t-lg border-slate-200/5'
        src={book.cover}
        alt='Cover'
      />
      <div className='w-full flex flex-col items-center p-2 lg: p1 relative'>
        <p className='flex flex-col w-full font-bold text-center'>
          <span title={book.title} className='truncate'>
            {book.title}
          </span>
          <span className='opacity-30 font-light'>{book.author.name}</span>
        </p>
        {!isInReadingList ? (
          <button
            className='bg-slate-600/20 font-light hover:bg-sky-600 shadow-md transition-all flex items-center place-content-center gap-1 ease-in p-2 rounded-full w-full mt-4 bottom-1 active:translate-y-1'
            onClick={handleAddToReadingList}
            role='add-button'
          >
            <MdBookmarkAdd className='text-lg' />
            Añadir a la lista
          </button>
        ) : (
          <p className='w-full flex gap-2 text-sky-600 justify-center items-center p-2 mt-4'>
            <MdBookmarkAdded className='text-2xl' /> Añadido
          </p>
        )}
      </div>
    </li>
  );
}

export default AvailableBookCard;
