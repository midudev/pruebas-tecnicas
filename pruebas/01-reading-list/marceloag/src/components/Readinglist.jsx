import Book from './Book';
import { useBooks } from '../store/bookStore';
import { shallow } from 'zustand/shallow';

function Readinglist() {
  const readinglist = useBooks((store) => store.readinglist, shallow);
  const opacity =
    readinglist.length > 0 ? 'opacity-100 w-5/12' : 'w-0 opacity-0 hidden';

  return (
    <aside
      className={`bg-white py-6 px-3 rounded-l-xl drop-shadow-md shadow-slate-500 transition-all duration-300 ease-in ${opacity}`}
    >
      <h2 className="text-xl font-sans text-center font-thin">Reading List </h2>
      <ul className="grid grid-cols-2 xl:grid-cols-3">
        {readinglist.map((book) => (
          <li key={book.ISBN}>
            <Book {...book} isInReadingList />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Readinglist;
