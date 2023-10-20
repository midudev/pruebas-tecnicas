import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type GenreProps = {
  genre: string
  onGenreChange: (newGenre: string) => void,
}

export default function GenreSelectFilter({genre, onGenreChange}: GenreProps) {

  const handleChange = (event: SelectChangeEvent) => {
    onGenreChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 180, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Filtrar por género</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={genre}
        label="Filtrar por género"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>---</em>
        </MenuItem>
        <MenuItem value='Fantasía'>Fantasía</MenuItem>
        <MenuItem value='Ciencia ficción'>Ciencia ficción</MenuItem>
        <MenuItem value='Zombies'>Zombies</MenuItem>
        <MenuItem value='Terror'>Terror</MenuItem>
      </Select>
    </FormControl>
  );
}