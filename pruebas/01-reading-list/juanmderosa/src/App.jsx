import { useEffect, useState } from "react";
import { FormFilterBy } from "./Components/FormFilterBy";
import { ReadingList } from "./Components/ReadingList";
import { getData } from "./Helpers/getData";
import { FilterForm } from "./Components/FilterForm";
import { BookListContainer } from "./Components/BookListContainer";
import { Loader } from "./Components/Loader";

function App() {
  const [books, setBooks] = useState(null);
  const [maxPages, setMaxPages] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [filteredByGenre, setFilteredByGenre] = useState(null);
  const [pagesValue, setPagesValue] = useState("");
  const [filteredByPages, setFilteredByPages] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [readingList, setReadingList] = useState([]);
  const [loading, setLoading] = useState(false);

  const BOOKS_LOCAL_STORAGE = "books";
  const READINGLIST_LOCAL_STORAGE = "readingList";

  useEffect(() => {
    if (localStorage.getItem("BOOKS_LOCAL_STORAGE")) {
      try {
        setBooks(JSON.parse(localStorage.getItem("BOOKS_LOCAL_STORAGE")));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        setLoading(true);
        getData("books.json").then((books) => {
          setBooks(books.library);
          localStorage.setItem(
            "BOOKS_LOCAL_STORAGE",
            JSON.stringify(books.library)
          );
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    if (localStorage.getItem("READINGLIST_LOCAL_STORAGE")) {
      setReadingList(
        JSON.parse(localStorage.getItem("READINGLIST_LOCAL_STORAGE"))
      );
    }
  }, []);

  useEffect(() => {
    if (books) {
      let set = new Set();
      let maxPages = 0;
      books.map((book) => {
        set.add(book.book.genre);
        maxPages = Math.max(maxPages, book.book.pages);
        return book;
      });
      setGenreList([...set]);
      setMaxPages(maxPages);
      setPagesValue(maxPages);
    }
  }, [books]);

  useEffect(() => {
    if (books) {
      const filteredBooks = books.filter((book) => {
        if (filterType === "filterbygenre") {
          return genreList.includes(book.book.genre);
        }
        if (filterType === "filterbypages") {
          return book.book.pages <= pagesValue;
        }
      });

      if (filterType === "filterbygenre") {
        setFilteredByGenre(filteredBooks);
      }
      if (filterType === "filterbypages") {
        setFilteredByPages(filteredBooks);
      }
    }
  }, [filterType, books, pagesValue]);

  useEffect(() => {
    try {
      if (books) {
        localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(books));
      }
      if (readingList.length === 0) {
        localStorage.removeItem("READINGLIST_LOCAL_STORAGE");
      } else {
        localStorage.setItem(
          "READINGLIST_LOCAL_STORAGE",
          JSON.stringify(readingList)
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [books, readingList]);

  const handleReadingList = (id) => {
    if (books) {
      const newBook = books.find((book) => book.book.ISBN === id);
      const newBooksList = books.filter((book) => book.book.ISBN !== id);
      setReadingList([...readingList, newBook]);
      setBooks(newBooksList);
      localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(newBooksList));
    }
  };

  const handleRemoveFromReadingList = (id) => {
    if (readingList && books) {
      const bookToRemove = readingList.find((book) => book.book.ISBN === id);
      if (bookToRemove) {
        setReadingList(
          readingList.filter(
            (book) => book.book.ISBN !== bookToRemove.book.ISBN
          )
        );
        setBooks([...books, bookToRemove]);
        localStorage.setItem("BOOKS_LOCAL_STORAGE", JSON.stringify(books));
      }
    }
  };

  return (
    <>
      <h1>BOOKS STORE</h1>
      <div className="contador-libros">
        {books && (
          <h4>
            Libros disponibles: <span>{books.length}</span>
          </h4>
        )}
        {readingList && (
          <h4>
            Libros en lista de Lectura: <span>{readingList.length}</span>
          </h4>
        )}
      </div>
      <section>
        <FormFilterBy setFilterType={setFilterType} />
        <FilterForm
          filterType={filterType}
          maxPages={maxPages}
          pagesValue={pagesValue}
          genreList={genreList}
          setFilteredByPages={setFilteredByPages}
          setFilteredByGenre={setFilteredByGenre}
          setPagesValue={setPagesValue}
          books={books}
        />
      </section>
      <main className="main-container">
        {loading ? (
          <Loader />
        ) : (
          <BookListContainer
            filterType={filterType}
            books={books}
            filteredByGenre={filteredByGenre}
            filteredByPages={filteredByPages}
            handleReadingList={handleReadingList}
          />
        )}
        <ReadingList
          readingList={readingList}
          handleRemoveFromReadingList={handleRemoveFromReadingList}
        />
      </main>
    </>
  );
}

export default App;
