import { FilterByGenre } from "./FilterByGenre";
import { FilterByType } from "./FilterByType";
import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const FilterForm = () => {
  const {
    filterType,
    pagesValue,
    setFilteredByPages,
    setFilteredByGenre,
    setPagesValue,
    books,
  } = useContext(BooksContext);

  const handleFilteredByPages = (e) => {
    if (books) {
      if (e.target.value === "") {
        setFilteredByPages(books);
      } else {
        setPagesValue(parseInt(e.target.value));
        const filteredBooks = books.filter(
          (book) => book.book.pages < pagesValue
        );
        setFilteredByPages(filteredBooks);
      }
    }
  };

  const handleFilteredByGenre = (e) => {
    if (books) {
      if (e.target.value === "all") {
        setFilteredByGenre(books);
      } else {
        const selectedGenre = e.target.value;
        const filteredBooks = books.filter(
          (book) => book.book.genre === selectedGenre
        );
        setFilteredByGenre(filteredBooks);
      }
    }
  };

  return (
    <form>
      {filterType === "filterbypages" && (
        <FilterByType handleFilteredByPages={handleFilteredByPages} />
      )}
      {filterType === "filterbygenre" && (
        <FilterByGenre handleFilteredByGenre={handleFilteredByGenre} />
      )}
    </form>
  );
};
