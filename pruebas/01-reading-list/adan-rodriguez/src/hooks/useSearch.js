import { useState } from "react";

export default function useSearch() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  return { search, handleSearch };
}
