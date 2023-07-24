import { useEffect, useState } from "react";
import "./App.css";
import data from "./books.json";
import { getLocalStorage, setLocalStorage } from "./storage";
import { getBooks } from "./api";

export interface Book {
  ISBN: string;
  author: { name: string; otherBooks: string[] };
  cover: string;
  genre: string;
  pages: number;
  synopsis: string;
  title: string;
  year: number;
}

function getBookState() {
  const readingList: Book[] = getLocalStorage();
  const booksList = getBooks();

  if (readingList.length) {
    return booksList.filter((book) => {
      const isAlreadyInReadingList = readingList.find(
        (readingListBook) => book.ISBN === readingListBook.ISBN
      );

      return !isAlreadyInReadingList;
    });
  }

  return booksList;
}

function App() {
  const [books, setBooks] = useState<Book[]>(getBookState);
  const [readingList, setReadingList] = useState<Book[]>(() =>
    getLocalStorage()
  );

  // Filters
  const [genre, setGenre] = useState<string>("");
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBooks = books.filter(
    (book) =>
      (!genre || book.genre === genre) &&
      (!pagesCount || book.pages <= pagesCount) &&
      (!searchQuery ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalBooksCount = books.length;
  const filterResultsCount = genre || pagesCount ? filteredBooks.length : 0;
  const readingListCount = readingList.length;

  //Get only the available categories from the books api/json data
  const bookGenres = Array.from(
    new Set(data.library.map((item) => item.book.genre))
  );

  //Sync reading list on local storage change
  useEffect(() => {
    const handleLocalStorageSync = () => {
      const localStorageReadingList = getLocalStorage();
      setReadingList(localStorageReadingList);
      setBooks(getBookState);
    };

    window.addEventListener("storage", handleLocalStorageSync);

    return () => {
      window.removeEventListener("storage", handleLocalStorageSync);
    };
  }, []);

  const addToReadingList = (ISBN: string) => {
    const selectedBook = filteredBooks.find((book) => book.ISBN === ISBN);
    if (selectedBook) {
      const updatedReadingList = [...readingList, selectedBook];
      setReadingList(updatedReadingList);
      setLocalStorage(undefined, updatedReadingList);
      return setBooks(books.filter((book) => book.ISBN !== ISBN));
    }
  };

  const removeFromReadingList = (ISBN: string) => {
    const bookToRemove = readingList.find((book) => book.ISBN === ISBN);
    if (bookToRemove) {
      setBooks([bookToRemove, ...books]);
      const updatedReadingList = readingList.filter(
        (book) => book.ISBN !== ISBN
      );
      setLocalStorage(undefined, updatedReadingList);
      return setReadingList(updatedReadingList);
    }
  };

  return (
    <main>
      <section>
        <div>
          <header>
            <h1>Biblioteca</h1>
            <h3>{totalBooksCount} libros disponibles</h3>
          </header>
          <div className="filters">
            <div>
              <label htmlFor="pages-range">Cantidad de paginas</label>
              <input
                type="range"
                name="pages-range"
                value={pagesCount}
                min={0}
                max={1000}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                step={100}
              />
              <span className="pages-count">
                {pagesCount === 0 ? "" : `< ${pagesCount}`}
              </span>
            </div>
            <div>
              <label htmlFor="genre-filter">Filtrar por género</label>
              <select
                name="genre"
                id="genre-filter"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value={""}>Todos</option>
                {bookGenres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="search">Buscar</label>
              <input
                type="text"
                name="search"
                className="search-input"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <span>
            {filterResultsCount
              ? `${filterResultsCount} Resultados encontrados`
              : ""}
          </span>
          {filteredBooks.length === 0 ? (
            <div className="no-results">
              <h2>Lo sentimos, no se han encontrado resultados</h2>
            </div>
          ) : (
            <BooksList
              books={filteredBooks}
              addToReadingList={addToReadingList}
            />
          )}
        </div>
      </section>

      {Boolean(readingList.length) && (
        <aside>
          <header>
            <h2>Lista de lectura</h2>
            <span>
              {readingListCount
                ? `${readingListCount} libros agregados`
                : "aun no agregaste libros"}
            </span>
          </header>

          <div className="reading-list">
            {readingList.length
              ? readingList.map((book) => (
                  <div key={book.ISBN} className="book">
                    <img src={book.cover} className="book-cover" />
                    <span className="book-title">{book.title}</span>
                    <button
                      className="remove-book"
                      onClick={() => removeFromReadingList(book.ISBN)}
                    >
                      x
                    </button>
                  </div>
                ))
              : null}
          </div>
        </aside>
      )}
    </main>
  );
}

interface BooksListProps {
  books: Book[];
  addToReadingList: (ISBN: string) => void;
}

function BooksList({ books, addToReadingList }: BooksListProps) {
  return (
    <div className="books">
      {books.map((book) => (
        <div
          key={book.ISBN}
          className="book"
          onClick={() => addToReadingList(book.ISBN)}
        >
          <img src={book.cover} className="book-cover" />
          <span className="book-title">{book.title}</span>
          <span className="book-author">{book.author.name}</span>
        </div>
      ))}
    </div>
  );
}
export default App;
