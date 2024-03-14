import { useMemo, useState, useCallback } from 'react';

const initialState = {
  pages: 0,
  genre: 'all',
  title: ''
};

function useFilters(setAvailablesBooks, books) {
  const [selectedFilter, setSelectedFilter] = useState(initialState);

  const genres = useMemo(
    () => [...new Set(books.map((book) => book.book.genre))],
    []
  );

  const applyFilters = useCallback((filters) => {
    const filteredBooks = books.filter(
      (item) =>
        // Check title filter
        item.book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        // Check genre filter
        (filters.genre === 'all' ? true : item.book.genre === filters.genre) &&
        // Check pages filter
        (filters.pages === 0 ? true : item.book.pages >= filters.pages)
    );
    return filteredBooks;
  }, []);

  const stateHandler = (updatedFilters) => {
    const filteredBooks = applyFilters(updatedFilters);
    setAvailablesBooks(filteredBooks);
    setSelectedFilter(updatedFilters);
  };

  const handleGenreFilter = (e) => {
    const filter = e.target.value;
    const updatedFilters = { ...selectedFilter, genre: filter };
    stateHandler(updatedFilters);
  };

  const handlePagesFilter = (e) => {
    const filter = e.target.value;
    const updatedFilters = { ...selectedFilter, pages: filter };
    stateHandler(updatedFilters);
  };

  const handleSearchByTitle = (e, title) => {
    e.preventDefault();
    const filter = title;
    const updatedFilters = { ...selectedFilter, title: filter };
    stateHandler(updatedFilters);
  };

  const clearFilters = () => {
    setSelectedFilter(initialState);
    setAvailablesBooks(books);
  };

  return {
    handleGenreFilter,
    handlePagesFilter,
    handleSearchByTitle,
    clearFilters,
    selectedFilter,
    genres
  };
}

export default useFilters;
