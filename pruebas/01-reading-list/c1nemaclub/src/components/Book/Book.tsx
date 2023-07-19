import { TBook } from '../../store/books/types';
import './Book.css';

type BookProps = {
  book: TBook;
  handleClick: (book: TBook) => void;
};

function Book({ book, handleClick }: BookProps) {
  return (
    <div className='book' onClick={() => handleClick(book)}>
      <div className={'image-container'}>
        <img src={book.book.cover} alt={book.book.title} />
      </div>
    </div>
  );
}

export default Book;
