import { useContext } from 'react';
import { ReadListContext } from '../context/readList';
import './books.css';

const Books = ({ books }) => {
  const { addToReadList, readList } = useContext(ReadListContext);

  const checkBookInReadList = (book) => {
    return readList.some((item) => item.ISBN === book.book.ISBN);
  };

  const handleSend = (event) => {
    addToReadList(event);
  };

  return (
    <div className='books'>
      {books.map((book) => {
        const isBookInReadList = checkBookInReadList(book);
        return (
          <div
            style={{ opacity: isBookInReadList ? 0.2 : 1 }}
            className='book'
            key={book.book.ISBN}
            onClick={isBookInReadList ? null : () => handleSend(book)}>
            <img
              src={book.book.cover}
              alt={book.book.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
