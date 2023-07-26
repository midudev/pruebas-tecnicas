import { useContext, useEffect, useState } from "react";
import { FormFilterBy } from "./Components/FormFilterBy";
import { ReadingList } from "./Components/ReadingList";
import { FilterForm } from "./Components/FilterForm";
import { BookListContainer } from "./Components/BookListContainer";
import { Loader } from "./Components/Loader";
import { BooksContext } from "./Context/BooksContext";

function App() {
  const { books, setFilterType, loading, readingList } =
    useContext(BooksContext);

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
        <FormFilterBy />
        <FilterForm />
      </section>
      <main className="main-container">
        {loading ? <Loader /> : <BookListContainer />}
        <ReadingList />
      </main>
    </>
  );
}

export default App;
