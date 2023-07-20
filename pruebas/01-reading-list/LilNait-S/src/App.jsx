import { useEffect, useRef, useState } from "react";
import books from "./mocks/books.json";
import { genreOptions } from "./constants";
import PagesFilter from "./components/PagesFilter";
import GenreFilter from "./components/GenreFilter";
import ListofBooks from "./components/ListofBooks";
import ReadList from "./components/ReadList";

function App() {
  const [listOfBooks, setlistOfBooks] = useState(books.library);
  const [readList, setReadList] = useState([]);

  const handleAddedBookToReadList = (ISBN) => {
    const selectBook = listOfBooks.find((item) => item.book.ISBN === ISBN);
    const NewBook = listOfBooks.filter((item) => item.book.ISBN !== ISBN);
    setlistOfBooks(NewBook);
    setReadList([...readList, selectBook]);
  };

  const handleRemoveFromReadList = (ISBN) => {
    const selectBook = readList.find((item) => item.book.ISBN === ISBN);
    const newReadList = readList.filter((item) => item.book.ISBN !== ISBN);
    setReadList(newReadList);
    setlistOfBooks([...listOfBooks, selectBook]);
  };

  // state pages
  const progressPages = useRef(null);
  const [minPages, setMinPages] = useState(0);
  const [maxPages, setMaxPages] = useState(1500);

  const handlePages = (setState) => (e) => {
    setState(e.target.value);
  };

  // state genre
  const [genre, setgenre] = useState(genreOptions[0]);

  const applyFilters = () => {
    let updatedBooks = books.library;

    // filter genre
    if (genre.title !== "todos") {
      updatedBooks = updatedBooks.filter(
        (item) => item.book.genre.toLowerCase() === genre.value
      );
    }

    // filter for pages
    updatedBooks = updatedBooks.filter(
      (item) => item.book.pages >= minPages && item.book.pages <= maxPages
    );

    progressPages.current.style.left = (minPages / 1500) * 100 + "%";
    progressPages.current.style.right = 100 - (maxPages / 1500) * 100 + "%";

    setlistOfBooks(updatedBooks);
  };

  useEffect(() => {
    applyFilters();
  }, [minPages, maxPages, genre]);

  return (
    <div className="flexCenter flex-col py-20 gap-8 container m-auto px-3">
      <h1 className="text-5xl font-bold">Lista de libros</h1>
      {/* Filters */}
      <header className="flex flex-wrap justify-center gap-6 sm:justify-between items-center w-full ">
        {/* Pages range */}
        <PagesFilter
          minPages={minPages}
          setMinPages={setMinPages}
          maxPages={maxPages}
          setMaxPages={setMaxPages}
          progressPages={progressPages}
          handlePages={handlePages}
        />

        {/* Genre Options */}
        <GenreFilter
          genre={genre}
          setgenre={setgenre}
          genreOptions={genreOptions}
        />
      </header>

      {/* Books */}
      <section className="flex gap-8">
        <ListofBooks
          listOfBooks={listOfBooks}
          readList={readList}
          handleAddedBookToReadList={handleAddedBookToReadList}
        />
        <ReadList
          readList={readList}
          handleRemoveFromReadList={handleRemoveFromReadList}
        />
      </section>
    </div>
  );
}

export default App;
