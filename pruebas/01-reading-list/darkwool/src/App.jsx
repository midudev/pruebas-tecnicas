import data from "../../books.json";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { BooksList } from "./components/BooksList";
import { BooksFilters } from "./components/BooksFilters";

function App() {
  const [availableBooks, setAvailableBooks] = useLocalStorage(
    "availableBooks",
    data.library,
  );
  const [readingList, setReadingList] = useLocalStorage("readingList", []);
  const [genre, setGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagesNumber, setPagesNumber] = useState(null);

  const filters = data.library.reduce(
    (result, curr) => {
      const book = curr.book;

      result.genres.push(book.genre);
      book.pages > result.pages.max
        ? (result.pages.max = book.pages)
        : (result.pages.min = book.pages);
      return result;
    },
    { genres: [], pages: { min: +Infinity, max: -Infinity } },
  );
  filters.genres = ["Todos", ...new Set(filters.genres)];

  const removeBook = (isbn, list) => {
    let bookIndex = null;
    const filteredList = list.filter((el, index) => {
      if (el.book["ISBN"] === isbn) {
        bookIndex = index;
        return false;
      }

      return true;
    });

    return [bookIndex, filteredList];
  };

  const handleAddToReadingList = (isbn) => {
    const [bookIndex, filteredList] = removeBook(isbn, availableBooks);
    setAvailableBooks(filteredList);
    setReadingList([availableBooks[bookIndex], ...readingList]);
  };

  const handleRemoveFromReadingList = (isbn) => {
    const [bookIndex, filteredList] = removeBook(isbn, readingList);
    setReadingList(filteredList);
    setAvailableBooks([readingList[bookIndex], ...availableBooks]);
  };

  function filterBooks(list) {
    let filteredList = list;

    if (searchTerm) {
      filteredList = filteredList.filter((el) => {
        return new RegExp(searchTerm, "i").test(el.book.title);
      });
    }
    if (genre) {
      filteredList = filteredList.filter((el) => {
        return el.book.genre === genre;
      });
    }
    if (pagesNumber) {
      filteredList = filteredList.filter((el) => el.book.pages <= pagesNumber);
    }

    return filteredList;
  }

  const handleSearchChange = (value) => setSearchTerm(value);
  const handleFilterPages = (value) => setPagesNumber(value);
  const handleGenreChange = (e) => {
    const selectedOption = e.target.value === "Todos" ? "" : e.target.value;
    setGenre(selectedOption);
  };

  const tabsData = [
    {
      name: `Libros disponibles (${availableBooks.length})`,
      content: (
        <BooksList
          data={filterBooks(availableBooks)}
          onFavoriteClick={handleAddToReadingList}
        />
      ),
    },
    {
      name: `Lista de lectura (${readingList.length})`,
      content: (
        <BooksList
          data={filterBooks(readingList)}
          isReadingList={true}
          onFavoriteClick={handleRemoveFromReadingList}
        />
      ),
    },
  ];

  return (
    <section className="container max-w-7xl">
      <Header />
      <BooksFilters
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
        onFilterPages={handleFilterPages}
        genres={filters.genres}
        pages={filters.pages}
      />
      <Tabs data={tabsData} />
    </section>
  );
}

export default App;
