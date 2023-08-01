import { MenuItem, Slider, TextField } from "@mui/material";
import { useContext } from "react";
import { ListOfBooksToRead } from "./ListBooksToRead";
import { AppContext } from "../context/context";

export function List() {
  const {
    addBookRead,
    filteredsBooks,
    valueSlider,
    valueSelect,
    genres,
    handleFilteredSeletec,
    handleFilteredSlider,
    filteredBooksForGenre,
  } = useContext(AppContext);
  return (
    <section>
      <h1>List</h1>
      <div className="w-40">
        <Slider
          classes={{ root: "w-full" }}
          max={1200}
          value={valueSlider}
          onChange={handleFilteredSlider}
          size="small"
          valueLabelDisplay="auto"
        />
        <TextField
          label="Filter books"
          value={valueSelect}
          classes={{ root: "w-full" }}
          size="medium"
          select
          onChange={handleFilteredSeletec}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="flex flex-row gap-4 flex-wrap w-8/12">
        {valueSlider != 0
          ? filteredsBooks.map((book) => {
              return (
                <div className="w-52 h-auto gap 4" key={book.book.ISBN}>
                  <h4 className="font-bold text-xl">{book.book.title}</h4>
                  <img
                    className="w-44 h-52 rounded-sm"
                    src={book.book.cover}
                    alt={book.book.title}
                  />
                  <button onClick={() => addBookRead(book.book)}>
                    Add to read
                  </button>
                </div>
              );
            })
          : filteredBooksForGenre.map((book) => {
              return (
                <div className="w-52 h-auto gap 4" key={book.book.ISBN}>
                  <h4 className="font-bold text-xl">{book.book.title}</h4>
                  <img
                    className="w-44 h-52 rounded-sm"
                    src={book.book.cover}
                    alt={book.book.title}
                  />
                  <button onClick={() => addBookRead(book.book)}>
                    Add to read
                  </button>
                </div>
              );
            })}
      </div>
      <div>
        <ListOfBooksToRead />
      </div>
    </section>
  );
}
