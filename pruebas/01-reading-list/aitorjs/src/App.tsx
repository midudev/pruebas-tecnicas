import { useEffect } from "react";
import "./App.css";
import { useBooksStore } from "./store/booksStore";
import Book from "./components/Book";

function App() {
  const { getBooks, books } = useBooksStore();

  useEffect(() => {
    void getBooks();
  }, [getBooks]);

  return (
    <>
      <h1 className="text-6xl font-bold">Librería de libros</h1>
      <h2>8 libros disponibles</h2>

      <div className="flex gap-3">
        <div className="flex flex-col">
          <label htmlFor="pageFilter">Filtrar por páginas</label>
          <input type="range" id="pageFilter" name="pageFilter" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="genreFilter">Filtrar por género</label>

          <select name="genreFilter" id="genreFilter">
            <option value="fantasia">Fantasía</option>
            <option value="ciencia-ficcion">Ciencia ficción</option>
            <option value="zoombies">Zoombies</option>
            <option value="terror">Terror</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {books.map(({ book }) => (
          <Book key={book.ISBN} data={book} />
        ))}
      </div>
    </>
  );
}

export default App;
