import { OptionGenreList } from "./OptionGenreList";
import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const FilterByGenre = ({ handleFilteredByGenre }) => {
  const { genreList } = useContext(BooksContext);
  return (
    <div className="filterBy-pages">
      <label htmlFor="gender-filter"> Filtrar por Género: </label>
      <select
        name="gener-filter"
        id="gender-filter"
        onChange={(e) => handleFilteredByGenre(e)}
      >
        <option value="all">---</option>
        <OptionGenreList genreList={genreList} />
      </select>
    </div>
  );
};
