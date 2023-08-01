import { useEffect, useState } from "react";
import { Book } from "../types";

export function ListOfBooksToRead() {
  const [data, setData] = useLocalStorage("booksToRead", []);
  const deleteBook = (book: Book) => {
    const booksToRead = JSON.parse(localStorage.getItem("booksToRead") || "");
    const newBooksToRead = booksToRead.filter(
      (item: Book) => item.ISBN !== book.ISBN
    );
    setData(newBooksToRead);
    localStorage.setItem("booksToRead", JSON.stringify(newBooksToRead));
  };

  return (
    <aside>
      <h1>Books to read</h1>
      <div>
        {data.map((book: Book) => {
          return (
            <div className="w-52 h-auto gap 4" key={book.ISBN}>
              <h4 className="font-bold text-xl">{book.title}</h4>
              <img
                className="w-44 h-52 rounded-sm"
                src={book.cover}
                alt={book.title}
              />
              <button onClick={() => deleteBook(book)}>Delete</button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function useLocalStorage(key: string, initialState: Book[] | undefined) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key) || "") || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
