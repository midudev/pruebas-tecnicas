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
import { useEffect } from "react";

function App() {
  const { setLibraryState } = useLibrary();

  useEffect(() => {
    setLibraryState({
      type: "init-books",
      books: books.library.map((book) => book.book),
    });
  }, []);

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
