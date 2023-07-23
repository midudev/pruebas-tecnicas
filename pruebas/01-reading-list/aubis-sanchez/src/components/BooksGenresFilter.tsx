import { getAmountOfBooksByGenre, getBooksGenres } from "../utils/books.utils";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useBook } from "../zustand/useBooks";

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
  const selectedGenres = useBook((state) => state.selectedGenres);
  const setSelectedGenres = useBook((state) => state.setSelectedGenres);

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
    <>
      <FormControl
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <InputLabel id="genres" sx={{ color: "white" }}>
          Filter by Genres
        </InputLabel>
        <Select
          multiple
          labelId="genres"
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
              {selected.map((value: string) => (
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
    </>
  );
};
