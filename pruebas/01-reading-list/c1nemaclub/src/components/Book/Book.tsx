import { TBook } from '../../store/books/types';
import style from './Book.module.css';

type BookProps = {
  book: TBook;
  handleClick: (book: TBook) => void;
};

function Book({ book, handleClick }: BookProps) {
  return (
    <div className={style['book']} onClick={() => handleClick(book)}>
      <div className={`${style['image-container']} book`}>
        <img src={book.book.cover} alt={book.book.title} />
      </div>
    </div>
  );
}

export default Book;
