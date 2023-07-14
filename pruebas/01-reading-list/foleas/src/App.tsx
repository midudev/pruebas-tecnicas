import { useEffect, useState } from "react";
import { Library, Book } from "./types";

function App() {
  const [books, setBooks] = useState<Array<Book>>([]);

  const getBooks = async (endpoint: string): Promise<void> => {
    const response = await fetch(endpoint);
    const data: Library = (await response.json()) as Library;
    setBooks(data.library);
  };

  useEffect(() => {
    getBooks("./books.json")
      .then(() => console.log("In then block"))
      .catch((err) => console.log("ERROR", err));
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold">{`${books.length} libros disponibles`}</h1>
      {books?.map(({ book }) => {
        return <p>{book.title}</p>;
      })}
    </main>
  );
}

export default App;
