import { useStore } from "@/store";
import useGetData from "@/hooks/useGetData";
import BookService from "@/services/book";
import { useEffect, useState, useCallback } from "react";

const useFilters = () => {
  // Store
  const { genre, maxPages } = useStore((state) => state.filters);
  const total = useStore((state) => state.total);
  //

  const [getFiltersOptions, filtersOptions] = useGetData({
    service: BookService.getFiltersOptions,
    initialState: { genres: [], maxPages: 1000 },
  });

  useEffect(() => {
    getFiltersOptions();
  }, [getFiltersOptions]);
  //

  const updateFilters = useStore((state) => state.updateFilters);

  const onChangeGenre = useCallback(
    (e) => {
      updateFilters({ genre: e.target.value });
    },
    [updateFilters]
  );

  const onChangeMaxPage = useCallback(
    (e) => {
      updateFilters({ maxPages: parseInt(e.target.value, 10) });
    },
    [updateFilters]
  );

  return {
    filtersOptions,
    total,
    genre,
    maxPages,
    onChangeGenre,
    onChangeMaxPage,
  };
};

export default useFilters;
