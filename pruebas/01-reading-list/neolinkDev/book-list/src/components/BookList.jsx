import { library } from '../data/books.json';

import useLocalStorage from '../hook/useLocalStorage';

import { filterByGenre } from '../utils/books-utils';

import { Book } from './Book';

export const BookList = () => {

  const [books, setBooks] = useLocalStorage('books', library);
  const [selectedGenre, setSelectedGenre] = useLocalStorage('selectedGenre', 'all');
  const [readingList, setReadingList] = useLocalStorage('readingList', []);

  // Array que contiene los géneros de los libros con los cuales llenamos el select
  const genresSelect = [...new Set(books.map(({ book }) => book.genre))];

  // 
  const filteredBooks = selectedGenre === "all" 
    ? books 
    : filterByGenre(selectedGenre, books);

  /**
   *
   * @param {String} ISBN
   */
  const handleAddToReadList = (ISBN) => {

    // Buscamos el libro que se quiere agregar a la lista de lectura mediante su ISBN que es único
    const bookToAdd = books.find(({ book }) => book.ISBN === ISBN);

    if (!bookToAdd) return;

    // actualiza la lista de libros
    setBooks((prevBooks) => prevBooks.filter(({ book }) => book.ISBN !== ISBN));

    // se agrega el libro a la lista de lectura
    setReadingList((prevReadingList) => [...prevReadingList, bookToAdd]);

    // válida que al agregar el último libro de un género a la lista de lectura el select vuelva a su opcion por default
    if (filteredBooks.length === 1) {
      setSelectedGenre('all');
    }
  };

  /**
   *
   * @param {String} ISBN
   */
  function handleRemoveFromReadingList(ISBN) {
    
    // guarda en la variable el libro a remover via su ISBN
    const bookToRemove = readingList.find(({ book }) => book.ISBN === ISBN);

    if (!bookToRemove) return;

    // filtra para mostrar los libros que no tengan el ISBN del libro a remover
    setReadingList((prevReadingList) =>
      prevReadingList.filter(({ book }) => book.ISBN !== ISBN)
    );

    // agrega el libro de la lista de lectura removido a la lista de libros
    setBooks((prevBooks) => [...prevBooks, bookToRemove]);
  }

  return (
    <>
      <section className="books container">
        <h2 className="books__h2">
          <em>
            {
              readingList.length === 0
                ? 'No hay libros en la lista de lectura'
                : `${ readingList.length } ${
                    readingList.length === 1 ? 'libro' : 'libros'
                  } en la lista de lectura`
            }
          </em>
        </h2>

        <div className="books__box">
          <div className="counts">
            <h2 className="counts__books-available">
              { books.length } { books.length === 1 ? 'libro' : 'libros' }{' '}
              disponibles
            </h2>
            
            {
              selectedGenre !== 'all' && (
                <p className="counts__genres-available">
                  { filteredBooks.length }{' '}
                  { filteredBooks.length === 1 ? 'libro' : 'libros' } de{' '}
                  { selectedGenre }
                </p>
              )
            }
          </div>

          <div className="filter">
            <h3 className="filter__h3">Filtrar por género</h3>
            <select
              value={selectedGenre}
              onChange={({ target }) => setSelectedGenre(target.value)}
            >
              <option value="all">Todos</option>
              {
                genresSelect.map((genre, index) => (
                  <option 
                    key={ index } 
                    value={ genre }
                  >
                    { genre } 
                  </option>
                ))
              }
            </select>
          </div>

          <div className="book-list__box" id="book-list">
            <ul className="book-list">
              {
                filteredBooks.map(({ book }) => {

                  const { ISBN, cover, title } = book;

                  return (
                    <Book
                      key={ ISBN }
                      cover={ cover }
                      title={ title }
                      handleAddToReadList={ () => handleAddToReadList( ISBN ) }
                    />
                  );
                })
              }
            </ul>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="reading-list__box">
          <h2 className="reading-list__h2">Lista de lectura</h2>
          <ul className="reading-list">
            {
              readingList.map(({ book }) => {
                const { ISBN, cover, title } = book;

                return (
                  <Book
                    key={ ISBN } 
                    cover={ cover }
                    title={ title }
                    isInBookList={ false }
                    handleRemoveFromReadingList={ () => handleRemoveFromReadingList( ISBN ) }
                  />
                );
              })
            }
          </ul>
        </div>
      </section>
    </>
  );
};