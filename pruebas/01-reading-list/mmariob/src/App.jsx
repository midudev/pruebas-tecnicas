import { useState, useRef } from 'react';
import BookComponent from './components/BookComponent';
import booksData from '../../books.json'; // JSON data with book information
import './App.css'; // CSS file for styling

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [booksToRead, setBooksToRead] = useState([]);
  const [booksRead, setBooksRead] = useState([]);
  const booksToReadRef = useRef(null);

  // Filtrar los libros según el género seleccionado
  const filteredBooks = selectedGenre
    ? booksData.library.filter((book) => book.book.genre === selectedGenre)
    : booksData.library;

  // Obtener lista de géneros únicos
  const genres = Array.from(
    new Set(booksData.library.map((book) => book.book.genre))
  );

  // Actualizar el género seleccionado
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Mover un libro seleccionado a la lista de libros por leer o de vuelta a la lista original
  const handleBookClick = (book) => {
    if (booksToRead.some((b) => b.book.title === book.book.title)) {
      setBooksToRead(booksToRead.filter((b) => b.book.title !== book.book.title));
      setBooksRead([...booksRead, book]);
    } else if (booksRead.some((b) => b.book.title === book.book.title)) {
      setBooksRead(booksRead.filter((b) => b.book.title !== book.book.title));
      setBooksToRead([...booksToRead, book]);
    } else {
      setBooksToRead([...booksToRead, book]);
    }
  };

  // Manejar el desplazamiento suave a la lista de libros por leer
  const scrollToBooksToRead = () => {
    booksToReadRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="book-app">
      <h1 className="book-count">
        Number of Books Available: {filteredBooks.length}
      </h1>
      <div className="genre-filter">
        <label htmlFor="genre-select" className="genre-filter-label">
          Filter by Genre:
        </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="genre-filter-select"
        >
          <option value="">All Genres</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="book-grid">
        {filteredBooks.map((book, index) => (
          <BookComponent
            key={index}
            title={book.book.title}
            author={book.book.author.name}
            genre={book.book.genre}
            image={book.book.cover}
            onClick={() => {
              handleBookClick(book);
              scrollToBooksToRead();
            }}
            isBookToRead={booksToRead.some((b) => b.book.title === book.book.title)}
            isBookRead={booksRead.some((b) => b.book.title === book.book.title)}
          />
        ))}
      </div>

      <h2 ref={booksToReadRef} className="books-to-read-title">
        Books to Read:
      </h2>
      <ul className="books-to-read-list">
        {booksToRead.map((book, index) => (
          <li key={index}>{book.book.title}</li>
        ))}
      </ul>

      <h2 className="books-read-title">Books Read:</h2>
      <ul className="books-read-list">
        {booksRead.map((book, index) => (
          <li key={index}>{book.book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
