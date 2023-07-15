import { useEffect, useState } from "react";
import { useStore } from "./store/store";
import { Library } from "./types";
import BookCard from "./components/BookCard";
import PageFilter from "./components/PageFilter";
import GenderFilter from "./components/GenderFilter";

function App() {
  const { page, perPage, books, setBooks } = useStore();

  const [loading, setLoading] = useState<boolean>(false);
  // const [books, setBooks] = useState<Array<Book>>([]);

  const getBooks = async (endpoint: string): Promise<void> => {
    const response = await fetch(endpoint);
    const data: Library = (await response.json()) as Library;
    setBooks(data.library);
  };

  useEffect(() => {
    setLoading(true);
    getBooks("./books.json")
      .then(() => {
        setLoading(false);
        //console.log("In then block");
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  return (
    <main className="flex">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="available-books-wrapper w-4/5">
            <h1 className="text-3xl font-bold mb-5">{`${books.length} libros disponibles`}</h1>

            <div className="filters-wrapper mb-5 flex">
              <PageFilter />
              <GenderFilter />
            </div>

            <div className="grid grid-cols-4 gap-10">
              {books
                ?.slice(perPage * (page - 1), perPage * page)
                .map(({ book: { title, cover } }, index) => {
                  return (
                    <BookCard
                      key={`${title}-${index}`}
                      title={title}
                      imageUrl={cover}
                    />
                  );
                })}
            </div>
          </div>
          <div className="lecture-books-wrapper w-1/5"></div>
        </>
      )}
    </main>
  );
}

export default App;
