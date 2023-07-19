import React, { useEffect, useMemo, useState } from "react";
import Layout from "./components/base/Layout";
import { Library } from "./components/framework/Library";
import { Head } from "./components/framework/Head";
import { Title, Subtitle } from "./components/framework/AppTitles";

import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("storage", syncTabs);
    return () => window.removeEventListener("storage", syncTabs);
  }, []);

  const syncTabs = (e) => {
    if (e.key === "readingList") {
      setReadingList(JSON.parse(e.newValue));
    }
  };

  return (
    <Layout>
      <Head>
        <Title />
        <Subtitle />
      </Head>
      <Library />
    </Layout>
  );
}

export default App;

// const filteredBooksByGenre = useMemo(() => {
//   return genre.length > 0
//     ? books.filter(({ book }) => book.genre === genre)
//     : books;
// }, [books, genre]);

// const filteredBooksByPages = useMemo(() => {
//   return pages > 0
//     ? filteredBooksByGenre.filter(({ book }) => book.pages <= pages)
//     : filteredBooksByGenre;
// }, [books, pages, filteredBooksByGenre]);
