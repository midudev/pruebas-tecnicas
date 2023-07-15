import "./app.css";
import libros from "../../books.json";
import { BookComponent } from "./components/book.component";
import { useState } from "preact/hooks";
import { Book } from "./types";

export function App() {
  const { library } = libros;

  const [librosSeleccionados, setLibrosSeleccionados] = useState<Book[]>([]);

  const setearLibros = (libros: Book[]) => {
    setLibrosSeleccionados(libros);
  };

  return (
    <>
      <article className="estanteria">
        <header>
          <h2>Libros disponibles</h2>
        </header>
        <section>
          {library.map((b) => {
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
          <h2>Lista de lectura</h2>
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
