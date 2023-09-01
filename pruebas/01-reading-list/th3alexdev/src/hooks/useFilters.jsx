import { useContext, useEffect } from "react";
import { FiltersContext } from "../context/contextFiltersProvider";

export const useFilters = ({ numOfPagesInput, numOfPagesRange }) => {
  const { filters, setFilters } = useContext(FiltersContext);

 const { maxPosiblePages } = filters

  const handleChangeRange = (e) => {
    setFilters({
      ...filters,
      sortByPages: true,
      pages: { maxPages: e.target.value },
    });
    numOfPagesInput.current.value = e.target.value;
  };

  const handleSetRange = (e) => {
    setFilters({
      ...filters,
      sortByPages: true,
      pages: { maxPages: e.target.value },
    });
    numOfPagesRange.current.value = e.target.value;
  };

  const removeRange = () => {
    setFilters({
      ...filters,
      sortByPages: false,
      pages: { maxPages: maxPosiblePages },
    });
    numOfPagesRange.current.value = maxPosiblePages;
  };

  return [handleChangeRange, handleSetRange, removeRange];
};
