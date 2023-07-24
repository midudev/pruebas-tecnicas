import { useEffect, useState } from "react";
import "./App.css";
import { getLocalStorage, setLocalStorage } from "./storage";
import { getBooks } from "./api";
import BooksList from "./components/BooksList";
import BooksFilters from "./components/BooksFilters";
import ReadingListSidebar from "./components/ReadingListSidebar";

export interface Book {
  ISBN: string;
  author: { name: string; otherBooks: string[] };
  cover: string;
  genre: string;
  pages: number;
  synopsis: string;
  title: string;
  year: number;
}

function getBookState() {
  const readingList: Book[] = getLocalStorage();
  const booksList = getBooks();

  if (readingList.length) {
    return booksList.filter((book) => {
      const isAlreadyInReadingList = readingList.find(
        (readingListBook) => book.ISBN === readingListBook.ISBN
      );

      return !isAlreadyInReadingList;
    });
  }

  return booksList;
}

function App() {
  const [books, setBooks] = useState<Book[]>(getBookState);
  const [readingList, setReadingList] = useState<Book[]>(() =>
    getLocalStorage()
  );

  // Filters
  const [genre, setGenre] = useState<string>("");
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredBooks = books.filter(
    (book) =>
      (!genre || book.genre === genre) &&
      (!pagesCount || book.pages <= pagesCount) &&
      (!searchQuery ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalBooksCount = books.length;
  const filterResultsCount = genre || pagesCount ? filteredBooks.length : 0;

  //Get only the available categories from the books api/json data
  const bookGenres = Array.from(new Set(books.map((book) => book.genre)));

  //Sync reading list on local storage change
  useEffect(() => {
    const handleLocalStorageSync = () => {
      const localStorageReadingList = getLocalStorage();
      setReadingList(localStorageReadingList);
      setBooks(getBookState);
    };

    window.addEventListener("storage", handleLocalStorageSync);

    return () => {
      window.removeEventListener("storage", handleLocalStorageSync);
    };
  }, []);

  const addToReadingList = (ISBN: string) => {
    const selectedBook = filteredBooks.find((book) => book.ISBN === ISBN);
    if (selectedBook) {
      const updatedReadingList = [...readingList, selectedBook];
      setReadingList(updatedReadingList);
      setLocalStorage(undefined, updatedReadingList);
      return setBooks(books.filter((book) => book.ISBN !== ISBN));
    }
  };

  const removeFromReadingList = (ISBN: string) => {
    const bookToRemove = readingList.find((book) => book.ISBN === ISBN);
    if (bookToRemove) {
      setBooks([bookToRemove, ...books]);
      const updatedReadingList = readingList.filter(
        (book) => book.ISBN !== ISBN
      );
      setLocalStorage(undefined, updatedReadingList);
      return setReadingList(updatedReadingList);
    }
  };

  const seachFiltersProps = {
    pagesCount,
    setPagesCount,
    genre,
    setGenre,
    searchQuery,
    setSearchQuery,
    bookGenres,
  };

  return (
    <main>
      <section>
        <div className="container">
          <header>
            <h1>Biblioteca</h1>
            <span>{totalBooksCount} libros disponibles</span>
          </header>
          <BooksFilters {...seachFiltersProps} />

          <span className="filter-results-count">
            {filterResultsCount
              ? `${filterResultsCount} ${
                  filterResultsCount === 1
                    ? "Resultado encontrado"
                    : "Resultados encontrados"
                } `
              : ""}
          </span>

          <BooksList
            books={filteredBooks}
            addToReadingList={addToReadingList}
          />
        </div>
      </section>

      {Boolean(readingList.length) && (
        <ReadingListSidebar
          readingList={readingList}
          removeFromReadingList={removeFromReadingList}
        />
      )}
    </main>
  );
}

// interface BookCardProps {
//   book: Book;
//   addToReadingList?: (ISBN: string) => void;
//   removeFromReadingList?: (ISBN: string) => void;
// }

// function BookCard({
//   book,
//   addToReadingList,
//   removeFromReadingList,
// }: BookCardProps) {
//   return (
//     <div
//       key={book.ISBN}
//       className="book"
//       onClick={() => addToReadingList(book.ISBN)}
//     >
//       <img src={book.cover} className="book-cover" />
//       <span className="book-title">{book.title}</span>
//       <span className="book-author">{book.author.name}</span>
//       {
//         <button
//           className="remove-book"
//           onClick={() => removeFromReadingList(book.ISBN)}
//         >
//           x
//         </button>
//       }
//     </div>
//   );
// }

export default App;
