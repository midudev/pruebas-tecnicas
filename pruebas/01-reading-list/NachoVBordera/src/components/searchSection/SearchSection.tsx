import React from "react";
import { BookContext } from "../../context/BookContext";

function SearchSection() {
  const { filter, setFilter, genere, setGenere, pages, setPages } =
    React.useContext(BookContext);
  return (
    <>
      <form className="searchSection">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          name="select"
          value={genere}
          onChange={(e) => setGenere(e.target.value)}
        >
          <option value="Fantasía">Fantasía</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia ficción">Ciencia Ficción</option>
        </select>
        <input
          type="range"
          onChange={(e) => {
            setPages(+e.target.value);
          }}
          min={0}
          max={2000}
          step={10}
        />
        <p>{pages}</p>
      </form>
    </>
  );
}

export default SearchSection;
