import { useState } from 'react';
import { useReadingList } from '../hooks/useReadingList';
import { ListOfBooks } from '../types/books';

type Props = {
  books: ListOfBooks;
};
export const Books: React.FC<Props> = ({ books }) => {
  const { addToReadingList } = useReadingList();
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  return !(books?.length > 0) ? (
    <h2>No hay libros para mostrar</h2>
  ) : (
    <>
      <div className='searchBooks'>
        <form className='searchBooks__form'>
          <label>🔎 </label>
          <input
            type='text'
            placeholder='Harry Potter, 1984...'
            onChange={handleChange}
          />
        </form>
      </div>
      <ul className='books'>
        {books
          .filter((item) => {
            return search.toLocaleLowerCase() === ''
              ? item
              : item.title.toLocaleLowerCase().includes(search);
          })
          .map((book) => (
            <li key={book.id} className='book'>
              <figure>
                <img src={book.cover} alt={`${book.title}'cover`} />
              </figure>
              <div className='book__info'>
                <div>
                  <strong>{book.title}</strong> - <i> by {book.author.name}</i>
                </div>
                <div>
                  <button
                    onClick={() => addToReadingList(book)}
                    className='btn__añadir'
                  >
                    Quiero Leer +
                  </button>
                </div>
                <div>
                  <strong>Sinopsis: </strong> <p>{book.synopsis}</p>
                </div>
                <div>
                  <strong>Otros libros del autor:</strong>
                  {book.author.otherBooks.map((otherBook) => (
                    <ul style={{ listStyle: 'inside' }}>
                      <li key={otherBook}>
                        <small>{otherBook}</small>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
