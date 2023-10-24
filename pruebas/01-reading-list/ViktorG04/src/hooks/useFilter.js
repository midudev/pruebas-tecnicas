import { useState } from "react";
import useRemove from "./useRemove";
import useFetch from "./useFetch";

const useFilter = () => {
  const { data } = useFetch();
  const { availableBooks } = useRemove({ library: data });

  const [filters, setFilters] = useState({ genre: "All", pages: "10" });

  const handleOnChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  //function to match with filters
  const filteredBooks = availableBooks.filter((book) => {
    return (
      book.book.pages >= filters.pages &&
      (filters.genre === "All" || book.book.genre === filters.genre)
    );
  });

  return { filters, handleOnChange, filteredBooks };
};

export default useFilter;
