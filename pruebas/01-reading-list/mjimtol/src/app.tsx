import { useEffect, useState } from "preact/hooks";
import libros from "../../books.json";
import "./app.css";
import { BookComponent } from "./components/book.component";
import { Book, Libros } from "./types";

export function App() {
  const { library }: Libros = libros;

  const [librosSeleccionados, setLibrosSeleccionados] = useState<Book[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  // const selectedGenre = useRef("none");
  const [generos, setGeneros] = useState<string[]>([]);

  const setearLibros = (libros: Book[]) => {
    setLibrosSeleccionados(libros);
  };

  const filterBooks = (e: any) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    const stgLectura = localStorage.getItem("lectura");
    if (stgLectura) setLibrosSeleccionados(JSON.parse(stgLectura));

    addEventListener("storage", () => {
      const stgLectura = localStorage.getItem("lectura");
      if (stgLectura) setLibrosSeleccionados(JSON.parse(stgLectura));
    });
  }, []);

  return (
    <>
      <article className="estanteria">
        <header>
          <h2>
            Libros disponibles (
            {
              library.filter((b) => {
                const { book } = b;
                if (selectedGenre === "all") return true;
                return book.genre === selectedGenre;
              }).length
            }
            )
          </h2>
        </header>
        <div style={{ marginBottom: "15px" }}>
          {"Filtro "}
          <select onChange={filterBooks}>
            <option value="all">Todos</option>
            {Array.from(new Set(library.map((item) => item.book.genre))).map(
              (entry) => (
                <option value={entry}>{entry}</option>
              )
            )}
          </select>
        </div>
        <section>
          {library
            .filter((b) => {
              const { book } = b;
              if (selectedGenre === "all") return true;
              return book.genre === selectedGenre;
              // return book.genre === selectedGenre.current;
            })
            .map((b) => {
              const { book } = b;
              return (
                <BookComponent
                  book={book}
                  setSelected={setearLibros}
                  seleccionados={librosSeleccionados}
                  zona="estanteria"
                />
              );
            })}
        </section>
      </article>
      <article className="estanteria-lectura">
        <header>
          <h2>Lista de lectura ({librosSeleccionados.length})</h2>
        </header>
        <section>
          {librosSeleccionados.map((b) => {
            return (
              <BookComponent
                book={b}
                setSelected={setearLibros}
                seleccionados={librosSeleccionados}
                zona="lectura"
              />
            );
          })}
        </section>
      </article>
    </>
  );
}
