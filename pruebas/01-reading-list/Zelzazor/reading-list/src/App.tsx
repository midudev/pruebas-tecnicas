import { useMemo } from "react";
import { BookList } from "./components/BookList";
import { Filters } from "./components/Filters";
import { ReadingList } from "./components/ReadingList";
import { useSetDefaultFilters } from "./hooks/useSetDefaultFilters";
import { useStore } from "./store";

function App() {
  const books = useStore((state) => state.library);
  const selectedGenre = useStore((state) => state.filterGenre);
  const readingList = useStore((state) => state.readingList);

  useSetDefaultFilters();

  const quantity = useMemo(() => {
    if (selectedGenre === "all") {
      return books.length;
    } else {
      return books.filter((book) => book.genre === selectedGenre).length;
    }
  }, [books, selectedGenre]);

  return (
    <>
      <div className="container mx-auto my-11">
        <h1 className="text-4xl font-bold mb-4">Reading List App</h1>
        <Filters />
        <div className="flex gap-5 flex-col-reverse md:flex-row">
          <div
            className={readingList.length > 0 ? "w-full md:w-2/3" : "w-full"}
          >
            <h2 className="text-3xl font-bold text-center md:text-left">
              Available Books: {books.length}
            </h2>
            <p className="mb-12 text-lg">
              Available books in selected genre: {quantity}
            </p>
            <BookList />
          </div>
          {readingList.length > 0 && (
            <div className="w-full md:w-1/3 p-3 dark:bg-slate-900">
              <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
                My Reading List: {readingList.length}
              </h2>
              <ReadingList />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
