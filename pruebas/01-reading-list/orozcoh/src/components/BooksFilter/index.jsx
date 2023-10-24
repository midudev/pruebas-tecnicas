import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";

const MAX_PAGES = 1000;

export const BooksFilter = ({ library, setFilteredBooks }) => {
  const userBooks = useSelector((state) => state.user.bookmarks);

  const [pagesFilter, setPagesFilter] = useState(1);
  const [genreFilter, setGenreFilter] = useState("all");
  const [moreLessFilter, setMoreLessFilter] = useState("more");
  const [includeUserBooks, setIncludeUserBooks] = useState(true);
  const [searchMyList, setSearchMyList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [tempInclude, setTempInclude] = useState(true);

  const [filteredBooks, setFilteredBookss] = useState(library);

  useEffect(() => {
    const booksList = library.map((book) => book["book"]);
    let filtered = booksList.filter((book) =>
      genreFilter === "all" ? true : book["genre"] === genreFilter
    );
    filtered = filtered.filter((book) =>
      moreLessFilter === "more"
        ? book["pages"] > pagesFilter
        : book["pages"] < pagesFilter
    );
    filtered = includeUserBooks
      ? filtered
      : filtered.filter((book) =>
          searchMyList ? userBooks.includes(book) : !userBooks.includes(book)
        );
    filtered = filtered.filter((book) =>
      book["title"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookss(filtered);
    setFilteredBooks(filtered);
  }, [
    genreFilter,
    moreLessFilter,
    includeUserBooks,
    userBooks,
    searchMyList,
    searchTerm,
  ]);

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
      filtered = includeUserBooks
        ? filtered
        : filtered.filter((book) =>
            searchMyList ? userBooks.includes(book) : !userBooks.includes(book)
          );
      filtered = filtered.filter((book) =>
        book["title"].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBookss(filtered);
      setFilteredBooks(filtered);
    }, 200);
  }, [pagesFilter]);

  console.log("input: ", searchTerm);
  return (
    <div
      style={{
        padding: "15px 10px 20px 10px",
        boxShadow: "inset 0 0 5px ",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#F2EE9D",
          padding: "3px",
        }}
      >
        <span>
          <b>Libros disponibles: </b>
          {library.length}
        </span>
        <br />
        <span>
          <b>Libros encontrados: </b>
          {filteredBooks.length}
        </span>
        {/*         <br />
        <span>
          <b>Libros en mi lista: </b>
          {userBooks.length}
        </span> */}
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
        <div>
          <div
            style={{
              height: "100%",
              paddingLeft: "5px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Buscar en mi lista"
              checked={searchMyList}
              onChange={() => {
                if (!searchMyList) {
                  console.log("IN...");
                  setTempInclude(includeUserBooks);
                  setIncludeUserBooks(false);
                } else {
                  console.log("OUT..");
                  setIncludeUserBooks(tempInclude);
                }
                setSearchMyList(!searchMyList);
              }}
            />
          </div>
          <div
            className="input-group "
            style={{
              padding: "0 5px 0px 0",
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
              placeholder="Nombre del libro"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div style={{ height: "100%", paddingLeft: "5px" }}>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Incluir libros de mi lista"
              checked={includeUserBooks}
              onChange={() => setIncludeUserBooks(!includeUserBooks)}
              disabled={searchMyList}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", paddingTop: "10px" }}>
          <div
            style={{
              padding: "0 5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "250px" }}>
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
            <div style={{ width: "250px" }}>
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
      </div>
    </div>
  );
};

BooksFilter.propTypes = {
  library: PropTypes.array,
  setFilteredBooks: PropTypes.func,
};
