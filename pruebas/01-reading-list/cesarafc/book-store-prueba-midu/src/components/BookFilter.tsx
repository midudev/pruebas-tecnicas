import { Box, Container, Slider } from "@mui/material";
import GenreSelectFilter from "./GenreSelectFilter";

type BookFilterProps = {
  genre: string,
  pages: number,
  onGenreChange: (newGenre: string) => void,
  onPagesChange: (newPages: number) => void,
}

function BookFilter({genre, pages, onGenreChange, onPagesChange }: BookFilterProps) {

  const handleChange = (_: Event, newValue: number | number[]) => {
    onPagesChange(newValue as number);
  }

  return (
    <Container sx={{display: "flex", justifyContent: 'center', gap: 2, alignItems: 'center', backgroundColor: '#aaaaaa', borderRadius: 5}}>
      <Box width={300}>
        <Slider
          value={pages}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={1500}
          min={10}
          onChange={handleChange}
        />
      </Box>
      <GenreSelectFilter genre={genre} onGenreChange={onGenreChange}/>
    </Container>
  );
}

export default BookFilter