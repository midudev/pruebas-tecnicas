import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Handler from "./components/Error/Handler";

// views
import Home from "./views/Home";

// db
import books from "./books.json";

// contexts
import { useLibrary } from "./contexts/LibraryProvider";
import { useCallback, useEffect } from "react";

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
    // fetch from localStorage
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Handler>
  );
}

export default App;
