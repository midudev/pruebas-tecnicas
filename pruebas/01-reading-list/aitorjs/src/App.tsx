import { useEffect } from "react";
import "./App.css";
import { useBooksStore } from "./store/booksStore";
import Book from "./components/Book";
import ReadList from "./components/ReadList";

function App() {
  const { getBooks, filteredBooks, filters, filter, books } = useBooksStore();

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      if (event.type === "storage") {
        window.location.reload(true);
        // const library = JSON.parse(localStorage.getItem("booksLibrary"));
        // const newValue = JSON.parse(event.newValue);
        // console.log("EVENT", library.state, books.length, filters);
        /*   localStorage.setItem(
          "booksLibrary",
          JSON.stringify({
            ...library,
            filteredBooks: JSON.stringify(event.newValue),
          })
        );
 */
      }
    });
  }, []);

  useEffect(() => {
    const data = window.localStorage.getItem("booksLibrary");
    const isData = JSON.parse(data).state.books.length > 0;

    console.log("isdata", JSON.parse(data).state);

    if (!isData) {
      getBooks();
    } /* else { */
    /* if (filters.pages <= 0) {
        const excludeIsbn = wantReadBooks.map((w) => w.book.ISBN);
        console.log(
          "excludeWantReadBooks",
          excludeIsbn,
          JSON.parse(data).state
        );
        const excludeWantReadBooks = books.filter((b) => {
          // console.log('isbn', b.book.ISBN)
          if (excludeIsbn.includes(b.book.ISBN)) {
            return false;
          }
          return false;
        });
        console.log("excludeWantReadBooks", excludeWantReadBooks);
        setBooks(excludeWantReadBooks);
      } */
    // }
  }, []);

  const filterGenreBooks = (genre: string) => {
    console.log("books", books);
    filter("genre", genre);
  };

  const filterPageBooks = (pages: number) => {
    filter("pages", pages);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold">Librería de libros</h1>

      <h2>
        {filteredBooks.length} libros disponibles {books.length}
      </h2>

      <div className="flex gap-3">
        <div className="flex flex-col">
          <label htmlFor="pageFilter">Filtrar por páginas</label>
          <input
            type="range"
            min="0"
            max="1400"
            step="200"
            id="pageFilter"
            name="pageFilter"
            onChange={(e) => filterPageBooks(Number(e.target.value))}
          />
          {filters.pages > 0 && <span>PAGES {filters.pages}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="genreFilter">Filtrar por género</label>

          <select
            value={filters.genre}
            onChange={(e) => filterGenreBooks(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
            <option value="Terror">Terror</option>
          </select>
          {filters.genre && <span>GENRE {filters.genre}</span>}
        </div>
      </div>

      <p>Filters {JSON.stringify(filters)}</p>

      {/* <p>Filter books {JSON.stringify(filteredBooks)}</p> */}

      <div className="flex">
        <div className="flex flex-wrap gap-2 w-4/5">
          {filteredBooks.map(({ book }) => (
            <Book key={book.ISBN} data={book} />
          ))}
        </div>

        <div className="flex flex-col">
          {books.length} <ReadList />
        </div>
      </div>
    </div>
  );
}

export default App;
