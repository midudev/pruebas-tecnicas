import { useEffect } from "react";
import "./App.css";
import { useBooksStore } from "./store/booksStore";

function App() {
  const { getBooks, books } = useBooksStore();

  useEffect(() => {
    void getBooks();
  }, [getBooks]);

  return (
    <>
      <h1 className="text-6xl font-bold underline bg-red-900">Hello world!</h1>
      {books.map((b) => (
        <p key={b.book.ISBN}>
          <span>{b.book.pages} </span>
          <span>{b.book.genre} </span>
          <span>{b.book.cover} </span>
          <span>{b.book.synopsis} </span>
          <span>{b.book.year} </span>
          <span>{b.book.ISBN} </span>
          <span>{b.book.author.name} </span>
        </p>
      ))}
    </>
  );
}

export default App;
