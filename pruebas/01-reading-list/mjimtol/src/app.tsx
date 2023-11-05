import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { BookComponent } from "./components/book.component";
import { useBooks } from "./hooks/useBooks";
import { TABS } from "./types.d";

export function App() {
  const {
    librosDisponibles,
    librosLista,
    generos,
    addToList,
    removeFromList,
    setearLista,
    addPriority,
    reducePriority,
  } = useBooks();

  const [selectedGenre, setSelectedGenre] = useState("all");
  const [titleSearched, setTitleSearched] = useState("");
  const [maxPages, setMaxPages] = useState(1200);
  const [activeTab, setActiveTab] = useState(TABS.Libreria);

  const filterBooks = (e: any) => {
    setSelectedGenre(e.target.value);
  };

  const filterTitle = (e: any) => {
    setTitleSearched(e.target.value);
  };

  const filterPages = (e: any) => {
    setMaxPages(e.target.value);
  };

  useEffect(() => {
    const stgLectura = localStorage.getItem("lectura");
    if (stgLectura) setearLista(JSON.parse(stgLectura));

    addEventListener("storage", () => {
      const stgLectura = localStorage.getItem("lectura");
      if (stgLectura) setearLista(JSON.parse(stgLectura));
    });
  }, []);

  const booksFiltered = () => {
    return librosDisponibles
      .filter((book) => {
        if (selectedGenre === "all") return true;
        return book.genre === selectedGenre;
      })
      .filter((book) => {
        if (titleSearched === "") return true;
        return book.title.toLowerCase().includes(titleSearched.toLowerCase());
      })
      .filter((book) => book.pages <= maxPages);
  };

  return (
    <>
      {/* Tabs pestaña */}
      <header className={`headerTabs`}>
        <span
          onClick={() => setActiveTab(TABS.Libreria)}
          className={`${activeTab === TABS.Libreria && "selectedTab"}`}
        >
          <h2>Libros disponibles ({booksFiltered().length})</h2>
        </span>
        <span
          onClick={() => setActiveTab(TABS.Lectura)}
          className={`${activeTab === TABS.Lectura && "selectedTab"}`}
        >
          <h2>Lista de lectura ({librosLista.length})</h2>
        </span>
      </header>
      {/* Contenido */}
      {activeTab === TABS.Libreria && (
        <section className="estanteria">
          {/* Filtros */}
          <div className={"filtros"}>
            <div>
              <input
                aria-label={"inputSearch"}
                onKeyUp={filterTitle}
                placeholder={"Título..."}
              ></input>
            </div>
            <div>
              Máximo de páginas ({maxPages})
              <input
                type="range"
                min="0"
                max="1500"
                step="1"
                onChange={filterPages}
                placeholder={"Título..."}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              {"Filtro "}
              <select onChange={filterBooks}>
                <option value="all">Todos</option>
                {generos.map((entry) => (
                  <option value={entry}>{entry}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Listas libros - completa */}
          <div className="contenedorLibros">
            {booksFiltered().map((book) => {
              return (
                <BookComponent
                  book={book}
                  setSelected={setearLista}
                  seleccionados={librosLista}
                  addToList={addToList}
                  removeFromList={removeFromList}
                  zona={TABS.Libreria}
                />
              );
            })}
          </div>
        </section>
      )}
      {/* Listas libros - para leer */}
      {activeTab === TABS.Lectura && (
        <section className="estanteria-lectura">
          <div className="contenedorLibros">
            {librosLista.map((book) => {
              return (
                <BookComponent
                  book={book}
                  setSelected={setearLista}
                  seleccionados={librosLista}
                  addToList={addToList}
                  removeFromList={removeFromList}
                  zona={TABS.Lectura}
                  addPriority={addPriority}
                  reducePriority={reducePriority}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
