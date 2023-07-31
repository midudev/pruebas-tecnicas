import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function GenreSelectFilter() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Genre</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={genre}
        label="Genero"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value='Fantasía'>Fantasía</MenuItem>
        <MenuItem value='Ciencia ficción'>Ciencia ficción</MenuItem>
        <MenuItem value='Zombies'>Zombies</MenuItem>
        <MenuItem value='Terror'>Terror</MenuItem>
      </Select>
    </FormControl>
  );
}