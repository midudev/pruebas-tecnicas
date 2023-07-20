import { TBook } from '../../store/books/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Book.css';

type BookProps = {
  book: TBook;
  handleClick: (book: TBook) => void;
};

function Book({ book, handleClick }: BookProps) {
  return (
    <div className='book' onClick={() => handleClick(book)}>
      <div className={'image-container'}>
        <LazyLoadImage
          src={book.book.cover}
          alt={book.book.title}
          width={200}
          height={300}
          effect='blur' // Apply the blur effect
          placeholderSrc={book.book.cover} // Use the same image as placeholder
        />
      </div>
    </div>
  );
}

export default Book;
