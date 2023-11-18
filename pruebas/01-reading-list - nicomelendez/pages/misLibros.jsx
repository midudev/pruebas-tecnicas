import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import NoBook from "../components/utils/NoBook";
import SearchMyBooks from "../components/search/SearchMyBooks";
import ListOfBooks from "../components/book/ListOfBooks";
import useLibrary from "../hooks/useLibrary";

export default function MisLibros() {
  const { getAllMyBooks, library } = useLibrary();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Obtener los libros de la biblioteca en la renderización inicial
    const booksNew = getAllMyBooks();
    setBooks(booksNew);
  }, [library]);

  return (
    <Layout title="Biblioteca">
      <h2 className="text-center text-3xl md:text-4xl pb-8 font-bold">
        Tu biblioteca
      </h2>
      <SearchMyBooks setBooks={setBooks} />
      {books.length === 0 ? <NoBook /> : <ListOfBooks books={books} />}
    </Layout>
  );
}
