import { useEffect, useState } from "react";
import booksData from "./json/books.json";
import BookList from "./components/BookList/BookList";
import { Book, BookWithReadList } from "./types";
import { parseLocalStorageData } from "./utils";
import "./App.css";

const listGenres = ["Fantasía", "Zombies", "Ciencia ficción", "Terror"];

function App() {
  const [books, setBooks] = useState<BookWithReadList[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<string>();
  const bookData = filteredBooks.length > 0 ? filteredBooks : books;

  const [readList, setReadList] = useState<BookWithReadList[]>(() => {
    return parseLocalStorageData<BookWithReadList[]>("readList", []);
  });

  useEffect(() => {
    setBooks(booksData.library.map((item) => ({ ...item.book })));
  }, []);

  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  useEffect(() => {
    filterByGenre(selectedGenre, books);
  }, [selectedGenre]);

  const filterByGenre = (search: string, data: Book[]) => {
    const filtered = data.filter((book) => book.genre === search);
    setFilteredBooks(filtered);
  };

  const addToReadList = (book: BookWithReadList) => {
    if (!readList.some((b) => b.title === book.title)) {
      setReadList((prevReadList) => [
        ...prevReadList,
        { ...book, isInReadList: true },
      ]);
      setBooks((prevBooks) =>
        prevBooks.map((b) =>
          b.title === book.title ? { ...b, isInReadList: true } : b
        )
      );
    }
  };

  const removeFromReadList = (book: BookWithReadList) => {
    setReadList((prevReadList) =>
      prevReadList.filter((b) => b.title !== book.title)
    );
    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.title === book.title ? { ...b, isInReadList: false } : b
      )
    );
  };

  const updateReadListState = (newReadList: BookWithReadList[]) => {
    setReadList(newReadList);
  };

  const MaxPagesBook = books.reduce(
    (acc, current) => {
      return current.pages > acc.pages ? current : acc;
    },
    { pages: -Infinity }
  );

  const changeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const result = books.filter((x) => x.pages <= parseInt(value));

    setFilteredBooks(result);
    setSliderValue(value);
  };

  useEffect(() => {
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key === "readList" && e.newValue !== JSON.stringify(readList)) {
        const newReadList = parseLocalStorageData<BookWithReadList[]>(
          "readList",
          []
        );
        updateReadListState(newReadList);
      }
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  useEffect(() => {
    setBooks(booksData.library.map((item) => ({ ...item.book })));
  }, []);

  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  return (
    <div className="App">
      <header>
        <h1>Book Catalog App</h1>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div>
            <label htmlFor="genreSelect">Filtra por género:</label>
            <select
              id="genreSelect"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Seleccionar</option>
              {listGenres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="myRange">Filtra por páginas: {sliderValue}</label>
            <input
              type="range"
              min="0"
              max={MaxPagesBook?.pages}
              value={sliderValue}
              onChange={changeSlider}
              id="myRange"
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <p>{books.length - readList.length} Libros disponibles</p>
          <p>{readList.length} en la lista de lectura</p>
        </div>
      </header>

      <main>
        <BookList
          books={bookData}
          readList={readList}
          onAddToReadList={addToReadList}
          onRemoveFromReadList={removeFromReadList}
        />
      </main>
    </div>
  );
}

export default App;
