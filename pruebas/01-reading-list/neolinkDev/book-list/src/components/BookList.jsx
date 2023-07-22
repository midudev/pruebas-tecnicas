import { library } from '../data/books.json';
import { useState } from 'react';

import { Book } from './Book';

// mapeo la librería par agregar la propiedad isReadingList a los libros
// const libraryData = () => library.map( book => ({
//   ...book,
//   isReadingList: false
// }))

export const BookList = () => {

  // hooks
  const [books, setBooks] = useState( library );
//  console.log(books)
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [readingList, setReadingList] = useState([]);
  // console.log(readingList)

  // const totalBooks = books.length;
  const genresSelect = [...new Set(books.map(({ book }) => book.genre))];

  // Función de filtrado por género
  const filterByGenre = (genre, books) => {
    return books.filter(({ book }) =>  book.genre === genre);
  };

  // Funciones de filtrado
  const filterFns = {
    'all': (books) => books,
    'Fantasía': (books) => filterByGenre('Fantasía', books),
    'Ciencia ficción': (books) => filterByGenre('Ciencia ficción', books),
    'Zombies': (books) => filterByGenre('Zombies', books),
    'Terror': (books) => filterByGenre('Terror', books),
  };

  //
  let filterGenres = filterFns[selectedGenre] ? filterFns[selectedGenre](books) : books;
  // console.log(filterGenres.length)

  /**
   * 
   * @param {String} ISBN 
   */
  const handleAddToReadList = ( ISBN ) => {
    // Buscar el libro en la lista de libros.
    const bookToAdd = books.find(({ book }) => book.ISBN === ISBN);
  
    // Si el libro no se encuentra, no hace nada.
    if (!bookToAdd) return;
  
    // Actualiza la lista de libros y la lista de lectura.
    setBooks((prevBooks) => prevBooks.filter(({ book }) => book.ISBN !== ISBN));
    setReadingList((prevReadingList) => [...prevReadingList, bookToAdd]);

    // vuelve al género por default al agregar el último libro de un género a la lista de lectura
    if (filterGenres.length === 1) {
      setSelectedGenre('all');
    }
  };

  /**
   * 
   * @param {String} ISBN 
   */
  function handleRemoveFromReadingList( ISBN ){

    // Buscar el libro en la lista de lectura.
    const bookToRemove = readingList.find(({ book }) => book.ISBN === ISBN);

    // Si el libro no se encuentra, no hace nada.
    if (!bookToRemove) return;

    // Actualiza la lista de lectura y la lista de libros.
    setReadingList((prevReadingList) => prevReadingList.filter(({ book }) => book.ISBN !== ISBN));
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
                : `${ readingList.length } ${ readingList.length === 1 ? 'libro' : 'libros' } en la lista de lectura`
            }
          </em>
          
        </h2>

        <div className="books__box">

          <div className="counts">

            <h2 className="counts__books-available">
              { books.length } { books.length === 1 ? 'libro' : 'libros' } disponibles
            </h2>
            {/* <p className="counts__reading-list">
              { readingList.length } { readingList.length === 1 ? 'libro' : 'libros' } en la lista de lectura
            </p> */}
            {
              selectedGenre !== 'all' && 
              <p className='counts__genres-available'>
                { filterGenres.length } { filterGenres.length === 1 ? 'libro' : 'libros' } de {selectedGenre} 
              </p>
            }

          </div>

          <div className="filter">

            <h3 className="filter__h3">Filtrar por género</h3>
            <select
              value={ selectedGenre }
              onChange={ ({ target }) => setSelectedGenre(target.value) }
            >
              <option value="all">Todos</option>
              {
                genresSelect.map((genre, index) => (
                  <option 
                    key={ index } 
                    value={ genre }
                  >
                    { genre }
                  </option>))
              }
            </select>

          </div>

          <div className='book-list__box' id="book-list">

            <ul className="book-list">
              {
                filterGenres.map( ({ book }) => {

                  const { ISBN, cover, title } = book;
                  
                  return (
                   <Book 
                    key={ ISBN }
                    
                    cover={ cover }
                    title={ title }
                    // isReadingList={ isReadingList }
                    handleAddToReadList={ () => handleAddToReadList( ISBN ) }
                    // isInBookList={ true }
                   />
                  )

                } )
              }
            </ul>

          </div>

        </div>
      </section>

      <section className='container'>
        <div className='reading-list__box'> 
          <h2 className='reading-list__h2'>Lista de lectura</h2>
          <ul className="reading-list">
            {
              readingList.map( ({ book }) => {

                const { ISBN, cover, title } = book;

                return (
                  <Book 
                    key={ ISBN }
                    cover={ cover }
                    title={ title }
                    isInBookList={ false }
                    handleRemoveFromReadingList={ () => handleRemoveFromReadingList(ISBN) }
                  />
                )

              } )
            }
          </ul>

        </div>
      </section>

    </>
    
  )
}
