import { Box, Container, Slider } from "@mui/material";
import GenreSelectFilter from "./GenreSelectFilter";

function BookFilter() {
  return (
    <Container sx={{display: "flex", justifyContent: 'space-evenly'}}>
      <Box width={300}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={1500}
          min={10}
        />
      </Box>
      <GenreSelectFilter />
    </Container>
  );
}

export default BookFilter