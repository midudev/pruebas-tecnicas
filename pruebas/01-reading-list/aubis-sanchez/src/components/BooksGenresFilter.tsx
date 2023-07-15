import { getAmountOfBooksByGenre, getBooksGenres } from "../utils/books.utils";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useContext } from "react";
import { BookContext, BookContextType } from "../context/bookContext";

const genres = getBooksGenres();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const BooksGenresFilter = () => {
  const { selectedGenres, setSelectedGenres } = useContext(
    BookContext
  ) as BookContextType;

  const handleChange = (event: SelectChangeEvent<typeof selectedGenres>) => {
    const {
      target: { value },
    } = event;
    setSelectedGenres(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          width: 300,
          border: "2px solid rgba(255,255,255,0.5)",
          borderRadius: "5px",
        }}
      >
        <InputLabel sx={{ color: "white" }}>Filter by Genres</InputLabel>
        <Select
          multiple
          value={selectedGenres}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
              color="GrayText"
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{ bgColor: "blue", color: "white" }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {`${genre} (${getAmountOfBooksByGenre(genre)})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
