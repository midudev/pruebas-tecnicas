import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAutocompleteBooksData } from "../utils";

export default function SearchFilter() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={getAutocompleteBooksData()}
      sx={{
        width: 300,
        display: "flex",
        flex: "1 1 0%",
        my: 2,
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "5px",
        bgcolor: "rgba(255,255,255,0.1)",
        color: "white",
      }}
      renderInput={(params) => (
        <TextField sx={{ color: "white" }} {...params} label="Search book..." />
      )}
    />
  );
}
