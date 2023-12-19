import { useContext } from 'react';
import { ReadListContext } from '../context/readList';
import './readlist.css';

const ReadList = () => {
  const { readList, removeFromReadList } = useContext(ReadListContext);

  const handleRemove = (event) => {
    removeFromReadList(event);
  };
  return (
    <>
      <h1 className='title'>Lista de lectura</h1>
      <div className='read-list '>
        {readList.map((book) => (
          <div
            className='read-list-book'
            key={book.ISBN}>
            <img
              src={book.cover}
              alt={book.title}
            />
            <span
              className='delete-btn'
              onClick={() => handleRemove(book)}>
              X
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReadList;
