import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/base/Layout";
import BookList from "./components/framework/Library";
import ReadingList from "./components/framework/ReadingList";
import data from "./books.json";

function App() {
  const [books, setBooks] = useState(data.library);
  const [readingList, setReadingList] = useState(
    () => JSON.parse(localStorage.getItem("readingList")) || []
  );

  useEffect(() => {
    window.addEventListener("storage", syncTabs);
  }, []);

  const syncTabs = (e) => {
    if (e.key === "readingList") {
      setReadingList(JSON.parse(e.newValue));
    }
  };

  const addToReadingList = (book) => {
    setReadingList([...readingList, book]);
    localStorage.setItem("readingList", JSON.stringify([...readingList, book]));
  };

  const removeFromReadingList = (book) => {
    setReadingList(readingList.filter((item) => item.title !== book));
    localStorage.setItem(
      "readingList",
      JSON.stringify(readingList.filter((item) => item.title !== book))
    );
  };

  const filterByGenre = (genre) => {
    if (genre === "") {
      setBooks(data.library);
    } else {
      setBooks(data.library.filter(({ book }) => book.genre === genre));
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl">Books</h1>
      <span>Tu biblioteca interactiva</span>
      <section className="m-4">
        <div>
          <label
            for="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            Headliner
          </label>

          <select
            onChange={(e) => filterByGenre(e.target.value)}
            name="genre"
            id="genreFilter"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Seleccionar</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
          </select>
        </div>
      </section>
      <ReadingList
        readingList={readingList}
        removeFromReadingList={removeFromReadingList}
      />
      <BookList library={books} addToReadingList={addToReadingList} />
    </Layout>
  );
}

export default App;
