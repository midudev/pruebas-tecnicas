import { useContext } from 'react';
import { MdBookmarkRemove } from 'react-icons/md';
import { readingListContext } from '../Context/ReadingListProvider';

function ReadingListCard({ book }) {
  const { readingList, setReadingList, setStoredList } =
    useContext(readingListContext);

  const handleRemoveFromList = () => {
    const newList = readingList.filter((item) => item.title !== book.title);
    setReadingList(newList);
    setStoredList(newList);
  };

  return (
    <li className='relative flex flex-col items-center rounded-md h-32 w-28 mb-8 animate__animated animate__jackInTheBox'>
      <img className='' src={book.cover} alt={book.title} />
      <button
        className='absolute w-fit -right-2 -top-3 font-medium hover:text-red-500/80 transition-all flex items-center text-slate-50 text-2xl ease-in rounded-full shadow-inner bg-slate-700 p-1 active:translate-y-1'
        onClick={handleRemoveFromList}
        role='remove-button'
      >
        <MdBookmarkRemove />
      </button>
    </li>
  );
}

export default ReadingListCard;
