import { useMemo } from "react";
import { useReadingListStore } from "@/store";
import { BookList } from "@/components";
import { Filters } from "./components";
import { getAvailableBooks } from "@/actions";
import { useFilters } from "@/hooks";
import { Filter } from "@/types";

const Home: React.FC = () => {
  const { books } = useReadingListStore();
  const { getAll } = useFilters();

  const activeFilters: Filter[] = useMemo(() => {

    return getAll();
  }, [getAll]);

  const avaiableBooks = useMemo(() => {
    return getAvailableBooks(books, activeFilters);
  }, [books, activeFilters]);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-slate-600 mb-4">
        Libros disponibles ({avaiableBooks.length})
      </h1>
      <Filters />
      <BookList books={avaiableBooks} />
    </div>
  );
};

export default Home;
