import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";
import { useBook } from "../zustand/useBooks";
import { orderBooksByPagesNumber } from "../utils";
import { SortBy } from "../models/sorting.model";

export const SortingSelector = () => {
  const [orderBy, setOrderBy] = React.useState<SortBy>(SortBy.label);
  const books = useBook.getState().books;
  const setBooks = useBook((state) => state.setBooks);

  const handleBookSorting = (order: SortBy) => {
    setOrderBy(order);
    setBooks(orderBooksByPagesNumber([...books], order));
  };

  return (
    <FormControl
      sx={{
        width: { xs: "100%", md: "50%" },
      }}
    >
      <InputLabel sx={{ color: "white" }} id="sorting-book-selector">
        {SortBy.label}
      </InputLabel>
      <Select
        labelId="sorting-book-selector"
        value={orderBy}
        label="Order by"
        onChange={(e) => handleBookSorting(e.target.value as SortBy)}
        sx={{ color: "white" }}
      >
        <MenuItem value={SortBy.label}>Sort by...</MenuItem>
        <MenuItem value={SortBy.desc}>Descendent</MenuItem>
        <MenuItem value={SortBy.asc}>Ascedent</MenuItem>
      </Select>
    </FormControl>
  );
};
