import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const FilterByType = ({ handleFilteredByPages }) => {
  const { maxPages, pagesValue } = useContext(BooksContext);

  return (
    <div className="filterBy-pages">
      <label htmlFor="pages-range">Cantidad de páginas</label>
      <input
        type="range"
        name="pages-range"
        id="pages-range"
        min="0"
        max={maxPages}
        value={pagesValue}
        step="1"
        onChange={(e) => handleFilteredByPages(e)}
      />
      <output name="result">{pagesValue}</output>
    </div>
  );
};
