import { useEffect, useState } from "react";

import logo from "./assets/logo.png";
import BookList from "./BookList";
import Footer from "./Footer";
import { Book } from "./models/book-model";
import ReadingList from "./ReadingList";

function App() {
  const [readingList, setReadingList] = useState<Book[]>(() => {
    const list = localStorage.getItem("reading-list");
    if (list) return JSON.parse(list);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("reading-list", JSON.stringify(readingList));
  }, [readingList]);

  const addToReadingList = (book: Book) => {
    const isAlreadyOnList = readingList.map((list) => list.id).includes(book.id);

    if (!isAlreadyOnList) {
      setReadingList((prevList) => [...prevList, book]);
    }
  };

  const deleteFromReadingList = (id: number) => {
    setReadingList((prevList) => prevList.filter((book) => book.id !== id));
  };

  return (
    <main className="main-container">
      <img src={logo} className="main-logo" alt="logo" />
      <h1>Mis Libros</h1>
      <BookList readingList={readingList} onBookSelection={addToReadingList} />
      <ReadingList books={readingList} onClearList={() => setReadingList([])} onDeleteFromReadingList={deleteFromReadingList} />
      <Footer />
    </main>
  );
}

export default App;
