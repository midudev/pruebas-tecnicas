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
        width: { xs: "100%", md: "50%" },
        display: "flex",
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
