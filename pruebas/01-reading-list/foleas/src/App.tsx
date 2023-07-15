import { useEffect, useState } from "react";
import { useStore } from "./store/store";
import { Library } from "./types";
import BookCard from "./components/BookCard";
import PageFilter from "./components/PageFilter";
import GenderFilter from "./components/GenderFilter";

function App() {
  const {
    page,
    perPage,
    books,
    setBooks,
    setGenres,
    currentGenre,
    filteredBooks,
    setFilteredBooks,
    selectedBooks,
    setSelectedBooks,
  } = useStore();

  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (endpoint: string): Promise<void> => {
    const response = await fetch(endpoint);
    const data: Library = (await response.json()) as Library;
    setBooks(data.library);
    setGenres(
      data.library
        ?.map(({ book: { genre } }) => genre)
        .filter((v, i, arr) => arr.indexOf(v) === i)
    );
  };

  useEffect(() => {
    setLoading(true);
    getData("./books.json")
      .then(() => {
        setLoading(false);
        //console.log("In then block");
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books
        ?.filter(({ book: { genre } }) =>
          currentGenre !== "" ? genre === currentGenre : true
        )
        .filter(({ book: { ISBN } }) => !selectedBooks.includes(ISBN))
        .map(({ book: { ISBN } }) => ISBN)
    );
  }, [currentGenre, books, selectedBooks]);

  return (
    <main className="flex">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="available-books-wrapper w-4/5">
            <h1 className="text-3xl font-bold mb-5">{`${
              books.length - selectedBooks.length
            } libros disponibles`}</h1>

            {selectedBooks.length > 0 && (
              <h3 className="text-1xl font-bold mb-5">{`${selectedBooks.length} en la lista de lectura`}</h3>
            )}

            <div className="filters-wrapper mb-5 flex">
              <PageFilter />
              <GenderFilter />
            </div>

            <div className="grid grid-cols-4 gap-10">
              {books
                ?.filter(({ book: { ISBN } }) => filteredBooks.includes(ISBN))
                .slice(perPage * (page - 1), perPage * page)
                .map(({ book: { title, cover, ISBN } }) => {
                  return (
                    <BookCard
                      key={ISBN}
                      title={title}
                      imageUrl={cover}
                      onClickHandler={() =>
                        setSelectedBooks([...selectedBooks, ISBN])
                      }
                    />
                  );
                })}
            </div>
          </div>
          <div className="lecture-books-wrapper w-1/5">
            {selectedBooks.length > 0 && (
              <>
                <h2 className="text-3xl font-bold mb-5">Lista de Lectura</h2>
                <div className="grid grid-cols-2 gap-10">
                  {books
                    ?.filter(({ book: { ISBN } }) =>
                      selectedBooks.includes(ISBN)
                    )
                    .map(({ book: { title, cover, ISBN } }) => {
                      return (
                        <BookCard
                          key={ISBN}
                          title={title}
                          imageUrl={cover}
                          withRemoveBnt={true}
                          onClickHandler={() => {
                            setSelectedBooks(
                              selectedBooks.filter((v) => v !== ISBN)
                            );
                          }}
                        />
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default App;
