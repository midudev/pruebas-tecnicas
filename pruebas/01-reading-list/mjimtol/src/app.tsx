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
  } = useBooks();

  const [selectedGenre, setSelectedGenre] = useState("all");
  const [activeTab, setActiveTab] = useState(TABS.Libreria);

  const filterBooks = (e: any) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const stgLectura = localStorage.getItem("lectura");
    if (stgLectura) setearLista(JSON.parse(stgLectura));

    addEventListener("storage", () => {
      const stgLectura = localStorage.getItem("lectura");

      // const libs = [...librosLista];
      // if (stgLectura) {
      //   JSON.parse(stgLectura).forEach((book: BookSelectable) => {
      //     const i = libs.findIndex((b) => b.ISBN === book.ISBN);
      //     if (i >= 0) libs[i].selected = true;
      //   });
      // }
      // if (stgLectura) setearLista(libs);

      if (stgLectura) setearLista(JSON.parse(stgLectura));
    });
  }, []);

  return (
    <>
      {/* Tabs pestaña */}
      <header className={`headerTabs`}>
        <span
          onClick={() => setActiveTab(TABS.Libreria)}
          className={`${activeTab === TABS.Libreria && "selectedTab"}`}
        >
          <h2>
            Libros disponibles (
            {
              librosDisponibles.filter((book) => {
                if (selectedGenre === "all") return true;
                return book.genre === selectedGenre;
              }).length
            }
            )
          </h2>
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
          <div className={"filtros"}>
            <div>
              <input placeholder={"Título..."}></input>
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
          <section>
            {librosDisponibles
              .filter((book) => {
                if (selectedGenre === "all") return true;
                return book.genre === selectedGenre;
              })
              .map((book) => {
                return (
                  <BookComponent
                    book={book}
                    setSelected={setearLista}
                    seleccionados={librosLista}
                    addToList={addToList}
                    removeFromList={removeFromList}
                    zona="estanteria"
                  />
                );
              })}
          </section>
        </section>
      )}
      {/* Listas libros - para leer */}
      {activeTab === TABS.Lectura && (
        <section className="estanteria-lectura">
          <section>
            {librosLista.map((b) => {
              return (
                <BookComponent
                  book={b}
                  setSelected={setearLista}
                  seleccionados={librosLista}
                  addToList={addToList}
                  removeFromList={removeFromList}
                  zona="lectura"
                />
              );
            })}
          </section>
        </section>
      )}
    </>
  );
}
