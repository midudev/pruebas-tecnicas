import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const MAX_PAGES = 1000;

/* const filter = () => {


} */

export const BooksFilter = ({ library, setFilteredBooks }) => {
  const [pagesFilter, setPagesFilter] = useState(1);
  const [genreFilter, setGenreFilter] = useState("all");
  const [moreLessFilter, setMoreLessFilter] = useState("more");
  const [filteredBooks, setFilteredBookss] = useState(library);

  //console.log("library: ", library);
  useEffect(() => {
    console.log("genre.....");

    const booksList = library.map((book) => book["book"]);
    let filtered = booksList.filter((book) =>
      genreFilter === "all" ? true : book["genre"] === genreFilter
    );
    filtered = filtered.filter((book) =>
      moreLessFilter === "more"
        ? book["pages"] > pagesFilter
        : book["pages"] < pagesFilter
    );
    setFilteredBookss(filtered);
    setFilteredBooks(filtered);
  }, [genreFilter, moreLessFilter]);

  useEffect(() => {
    console.log("pagesEffect.....");
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("pagesTimeOut.....");
      const booksList = library.map((book) => book["book"]);
      let filtered = booksList.filter((book) =>
        genreFilter === "all" ? true : book["genre"] === genreFilter
      );
      filtered = filtered.filter((book) =>
        moreLessFilter === "more"
          ? book["pages"] > pagesFilter
          : book["pages"] < pagesFilter
      );
      setFilteredBookss(filtered);
      setFilteredBooks(filtered);
    }, 200);
  }, [pagesFilter]);

  return (
    <div
      style={{
        padding: "10px",
        boxShadow: "inset 0 0 5px ",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          <b>Libros disponibles en CyberLib: </b>
          {library.length}
        </span>
        <br />
        <span>
          <b>Libros encontrados: </b>
          {filteredBooks.length}
        </span>
        <br />
        <span>
          <b>Libros en mi lista: </b>
          {0}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          className="input-group mb-3"
          style={{
            padding: "0 5px 8px 0",
            width: "350px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span className="input-group-text" id="inputGroup-sizing-default">
            Buscar:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              padding: "0 5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "165px" }}>
              <span>Género:</span>
              <Form.Select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                aria-label="Default select example"
              >
                <option value="all">Todos</option>
                <option value="Ciencia ficción">Ciencia Ficción</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Terror">Terror</option>
                <option value="Zombies">Zombies</option>
              </Form.Select>
            </div>
          </div>

          <div
            style={{
              padding: "0 5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "165px" }}>
              <span>Páginas:</span>
              <Form.Select
                value={moreLessFilter}
                onChange={(e) => setMoreLessFilter(e.target.value)}
                aria-label="Default select example"
              >
                <option value="more">Mas de {pagesFilter}</option>
                <option value="less">Menos de {pagesFilter}</option>
              </Form.Select>
            </div>

            <Form.Range
              //width="165px"
              min={1}
              max={MAX_PAGES}
              value={pagesFilter}
              onChange={(e) => setPagesFilter(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            padding: "0 5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ height: "100%" }}>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Incluir libros de mi lista"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

BooksFilter.propTypes = {
  library: PropTypes.array,
  setFilteredBooks: PropTypes.func,
};
