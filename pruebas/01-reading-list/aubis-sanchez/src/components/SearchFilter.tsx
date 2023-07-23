import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAutocompleteBooksData } from "../utils";

export default function SearchFilter() {
  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={getAutocompleteBooksData()}
      sx={{
        width: "33%",
        display: "flex",
        flex: "1 1 0%",
        my: 2,
      }}
      renderInput={(params) => (
        <>
          <TextField
            sx={{ color: "white" }}
            {...params}
            label="Search book..."
          ></TextField>
        </>
      )}
    />
  );
}
