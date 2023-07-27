import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import useBooks from "../../store/store";

const GenreFilter = (props: { genres: string[] }) => {
  const { setGenreFilter } = useBooks((state) => ({
    setGenreFilter: state.setGenreFilter,
  }));
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setGenreFilter(genre);
  }, [genre]);

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    setGenre(e.target.value);
  };

  const { genres } = props;

  return (
    <>
      <div className="w-1/3 p-2">
        <p>Filtrar por Genero</p>

        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            placeholder="Seleccionar..."
            displayEmpty
            onChange={onChangeSelect}
          >
            <MenuItem key={""} value="">
              Todos
            </MenuItem>
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default GenreFilter;
