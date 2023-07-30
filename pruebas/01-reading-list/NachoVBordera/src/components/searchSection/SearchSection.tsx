import React from "react";
import { BookContext } from "../../context/BookContext";

function SearchSection() {
  const { filter, setFilter, genere, setGenere, setPages } =
    React.useContext(BookContext);
  const handlerClickReset = (e: any) => {
    e.preventDefault();
    setFilter("");
    setPages(0);
    setGenere("");
  };
  return (
    <>
      <form className="searchSection">
        <ul>
          <li>
            <label htmlFor="title">TITLE</label>
          </li>
          <li>
            <input
              id="title"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="pages">NUM.PAGES </label>
          </li>

          <li>
            <input
              id="pages"
              type="range"
              onChange={(e) => {
                setPages(+e.target.value);
              }}
              min={0}
              max={1500}
              step={10}
            />
          </li>
          <li>
            <label htmlFor="genere">GENERE</label>
          </li>
          <li>
            <select
              id="genere"
              name="select"
              value={genere}
              onChange={(e) => setGenere(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Zombies">Zombies</option>
              <option value="Terror">Terror</option>
              <option value="Ciencia ficción">Ciencia Ficción</option>
            </select>
          </li>
          <li>
            <button onClick={(e) => handlerClickReset(e)}>RESET</button>
          </li>
        </ul>
      </form>
    </>
  );
}

export default SearchSection;
