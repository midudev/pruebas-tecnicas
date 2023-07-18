import { useReadingList } from '../hooks/useReadingList';
import { ListOfBooks } from '../types/books';

type Propss = {
  sort: boolean;
};
export const ReadingList: React.FC<Propss> = ({ sort }) => {
  const { readingList, removeFromReadingList } = useReadingList();

  const sortBooks = (readingList: ListOfBooks) => {
    return sort
      ? [...readingList].sort((a, b) => a.year - b.year)
      : readingList;
  };

  const sortedBooks = sortBooks(readingList);

  return (
    <div className='readingList__container'>
      {!(readingList.length > 0) ? (
        <h3>No estas leyendo ningún libro 😞</h3>
      ) : (
        <>
          <ul className='readingList'>
            {sortedBooks.map((book) => (
              <li key={book.id} className='readinItem'>
                <figure>
                  <img
                    src={book.cover}
                    alt={`${book.title}'cover`}
                    style={{ width: '100px' }}
                  />
                </figure>
                <div>
                  <p>{book.title}</p>
                  <small>Año: {book.year}</small>
                </div>
                <button
                  className='btn__remove'
                  onClick={() => removeFromReadingList(book)}
                >
                  Quitar de la Lista
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
