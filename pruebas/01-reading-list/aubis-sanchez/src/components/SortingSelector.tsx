import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";
import { useBook } from "../zustand/useBooks";
import { orderBooksByPagesNumber } from "../utils";
import { SortBy } from "../models/sorting.model";

export const SortingSelector = () => {
  const [orderBy, setOrderBy] = React.useState<SortBy | "">("");
  const books = useBook.getState().books;
  const setBooks = useBook((state) => state.setBooks);

  const handleBookSorting = (order: SortBy) => {
    setOrderBy(order);
    setBooks(orderBooksByPagesNumber([...books], order));
  };

  return (
    <Box>
      <FormControl
        sx={{
          my: 2,
          width: "33%",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "5px",
          bgcolor: "rgba(255,255,255,0.1)",
          minWidth: 250,
        }}
      >
        <InputLabel sx={{ color: "white" }} id="sorting-book-selector">
          Sort by...
        </InputLabel>
        <Select
          labelId="sorting-book-selector"
          value={orderBy}
          label="Order by"
          onChange={(e) => handleBookSorting(e.target.value as SortBy)}
          sx={{ color: "white" }}
        >
          <MenuItem value={SortBy.desc}>Descendent</MenuItem>
          <MenuItem value={SortBy.asc}>Ascedent</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
