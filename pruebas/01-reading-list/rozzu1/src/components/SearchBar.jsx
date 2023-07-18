import { useState, useEffect } from "react";
import { bookStore } from "../state/bookStore";

export const SearchBar = () => {
  const { setSearchBook, searchBook } = bookStore();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(searchBook);
  }, [searchBook]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchBook(value);
  };

  return (
    <div>
      <p className="text-base">Search By Name</p>
      <input
        type="text"
        placeholder="e.g. Clean Code"
        className="input input-bordered w-full max-w-xs border border-neutral"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};
