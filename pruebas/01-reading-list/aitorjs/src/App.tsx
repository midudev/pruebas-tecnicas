import { useEffect, useState } from "react";
import "./App.css";
import { useBooksStore } from "./store/booksStore";
import Book from "./components/Book";

function App() {
  const { getBooks, dbbooks } = useBooksStore();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const _dbbooks = getBooks();
    console.log("ANTES _dbbooks", _dbbooks, dbbooks);
    /*  setTimeout(() => {
      console.log("_dbbooks", _dbbooks, dbbooks);
    }, 100); */
    setBooks(_dbbooks);
  }, [getBooks]);

  const filterGenreBooks = (genre: string) => {
    console.log("E", genre);
    const newBooks = dbbooks.filter((d) => {
      return d.book.genre === genre;
    });

    console.log("newBooks", newBooks);
    setBooks(newBooks);
  };

  return (
    <>
      <h1 className="text-6xl font-bold">Librería de libros</h1>

      <h2>{books?.length ?? 0} libros disponibles</h2>

      <div className="flex gap-3">
        <div className="flex flex-col">
          <label htmlFor="pageFilter">Filtrar por páginas</label>
          <input type="range" id="pageFilter" name="pageFilter" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genreFilter">Filtrar por género</label>

          <select onChange={(e) => filterGenreBooks(e.target.value)}>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
        </div>
      </div>

      {books !== null && (
        <>
          <div className="flex flex-wrap gap-3">
            {books.map(({ book }) => (
              <Book key={book.ISBN} data={book} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
