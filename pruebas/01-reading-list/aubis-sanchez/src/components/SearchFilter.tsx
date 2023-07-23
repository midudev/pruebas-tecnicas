import { TextField, Autocomplete } from "@mui/material";
import { getAutocompleteBooksData, getDefaultBooks } from "../utils";
import { useBook } from "../zustand";
import { useEffect, useState } from "react";

const allBooks = getDefaultBooks();

export default function SearchFilter() {
  const setBooks = useBook((state) => state.setBooks);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.length === 0) setBooks(allBooks);
    setBooks(
      allBooks.filter((book) =>
        book.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue.length]);

  const handleOptionSelection = (
    event: React.SyntheticEvent,
    value: string
  ) => {
    setInputValue(value);
  };

  const handleSearch = (value: string) => {
    setInputValue(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={getAutocompleteBooksData()}
      onInputChange={handleOptionSelection}
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
      }}
      renderInput={(params) => (
        <>
          <TextField
            sx={{ color: "white" }}
            {...params}
            label="Search book..."
            placeholder="Search book..."
            value={inputValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </>
      )}
    />
  );
}
