import { useEffect } from "react";
import {
  getBooksToRead,
  getBooksAvailable,
  getBooksData,
} from "./services/books";
import { useAppContext } from "./AppProvider";
import Select from "./components/form/Select";
import { saveBooksToRead } from "./services/books";
import RangeInput from "./components/form/RangeInput";
import BooksList from "./components/BooksList";

function App() {
  const {
    booksAvailable,
    booksToRead,
    genres,
    pages,
    genre,
    loading,
    filter,
    dispatch,
    state,
  } = useAppContext();

  console.log(state);
  useEffect(() => {
    getBooksAvailable()
      .then((resp) => {
        dispatch({ type: "SET_BOOKS_AVAILABLE", value: resp });
      })
      .catch((err) => console.log(err.message));

    const resp = getBooksToRead();
    if (resp) {
      dispatch({ type: "SET_BOOKS_TO_READ", value: resp });
    }

    getBooksData()
      .then(({ genres, maxPage }) => {
        dispatch({ type: "SET_GENRES", value: genres });
        dispatch({ type: "SET_PAGES", value: { min: 0, max: maxPage } });
        dispatch({ type: "SET_LOADING", value: false });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (booksToRead && !loading) {
      saveBooksToRead(booksToRead);
    }
  }, [booksToRead]);

  if (loading)
    return (
      <div className="container-center">
        <p className="container-center__loading">Cargando...</p>
      </div>
    );
  return (
    <div className="container-app">
      <h3 className="container-app__subtitle">
        {booksToRead.length > 0 ? "Con " : "Sin "} libros en la lista de lectura
      </h3>
      <div className="container-grid">
        <main className="main">
          <div className="info">
            <h1 className="info__available">
              {booksAvailable ? booksAvailable.length : 0} libros disponibles
            </h1>
            {booksToRead && booksToRead.length > 0 && (
              <p className="info__reading">
                {booksToRead.length} en la lista de lectura
              </p>
            )}
          </div>
          <form className="controls">
            <RangeInput
              label="Filtrar por páginas"
              max={1200}
              onChange={({ min, max }) =>
                dispatch({ type: "SET_PAGES", value: { min, max } })
              }
            />
            <Select
              label="Género"
              onChange={(genre) =>
                dispatch({ type: "SET_GENRE", value: genre })
              }
              data={genres}
            />
          </form>

          <BooksList list={booksAvailable} filter={filter} />
        </main>
        {booksToRead.length > 0 && (
          <aside className="aside">
            <h2>Lista de lectura</h2>
            <BooksList list={booksToRead} />
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;
