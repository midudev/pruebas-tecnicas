import { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Loading from "./components/Loading/Loading";
import Handler from "./components/Error/Handler";

// views
import Home from "./views/Home/Home";
import ReadingList from "./views/ReadingList/ReadingList";

// layouts
import Main from "./layouts/Main";

// db
import books from "./books.json";

// contexts
import { useLibrary } from "./contexts/LibraryProvider";

// config
import config from "./config";

function App() {
  const { setLibraryState } = useLibrary();

  const onLocalChange = useCallback(
    (e) => {
      const { key, newValue } = e;
      if (key === config.readingList) {
        setLibraryState({
          type: "init-reading-list",
          stringReadingList: newValue,
        });
      }
    },
    [setLibraryState]
  );

  useEffect(() => {
    const datetime = new Date().getTime();
    setLibraryState({
      type: "init-books",
      books: books.library.map((book) => book.book),
      datetime,
    });
    // fetch from localStorage for the first time
    if (localStorage.getItem(config.readingList) !== null)
      setLibraryState({
        type: "init-reading-list",
        stringReadingList: localStorage.getItem(config.readingList),
      });
  }, []);

  useEffect(() => {
    window.addEventListener("storage", onLocalChange);
    return () => {
      window.removeEventListener("storage", onLocalChange);
    };
  }, [onLocalChange]);

  return (
    <Handler>
      <Suspense
        fallback={<Loading className="w-full h-full fixed z-50 top-0 left-0" />}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="/reading-list" element={<ReadingList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Handler>
  );
}

export default App;
