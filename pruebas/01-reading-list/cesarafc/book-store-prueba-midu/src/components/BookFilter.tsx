import { Box, IconButton, Slider, Typography } from "@mui/material";
import GenreSelectFilter from "./GenreSelectFilter";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useBooksStore } from "../store/books";
import SearchAppBar from "./SearchInput";

type BookFilterProps = {
  genre: string,
  pages: number,
  search: string,
  onGenreChange: (newGenre: string) => void,
  onPagesChange: (newPages: number) => void,
  onSearchChange: (term: string) => void,
  resetFilters: () => void,
}

function BookFilter({genre, pages, search, onGenreChange, onPagesChange, onSearchChange, resetFilters }: BookFilterProps) {

  const {booksStore, cartStore} = useBooksStore(state => state);

  const handleChange = (_: Event, newValue: number | number[]) => {
    onPagesChange(newValue as number);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 3,
        position: "sticky",
        top: 0,
        zIndex: 30,
        backgroundColor: "#f3f7fa",
        // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      }}
    >
      <Typography variant="h3" sx={{paddingLeft: 2}} >
        Libreria
        <Typography variant="caption">
          {" "}
          ({booksStore.length - cartStore.length})
        </Typography>
      </Typography>
      <SearchAppBar search={search} onSearchChange={onSearchChange} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box width={250} sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
          <Typography>Filtro por paginas: </Typography>
          <Slider
            sx={{ width: 240 }}
            value={pages}
            aria-label="Default"
            valueLabelDisplay="auto"
            max={1500}
            min={10}
            onChange={handleChange}
          />
        </Box>
        <GenreSelectFilter genre={genre} onGenreChange={onGenreChange} />
        <IconButton onClick={resetFilters}>
          <FilterAltOffIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default BookFilter