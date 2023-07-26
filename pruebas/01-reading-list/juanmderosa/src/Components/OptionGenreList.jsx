import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";
export const OptionGenreList = () => {
  const { genreList } = useContext(BooksContext);
  return (
    <>
      {genreList &&
        genreList.map((genre, index) => (
          <option
            key={index}
            value={genre}
          >
            {genre}
          </option>
        ))}
    </>
  );
};
