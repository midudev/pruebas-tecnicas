import Book from './Book';
import { useBooks } from '../store/bookStore';
import Filters from './Filters';

function Booklist({ books }) {
  const { filter } = useBooks((store) => store);

  return (
    <div className="w-7/12 flex flex-col p-2">
      <Filters />
      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {books.map((bookData) => (
          <li key={bookData.ISBN}>
            <Book {...bookData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
