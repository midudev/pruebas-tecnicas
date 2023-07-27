import { UseBookList } from "../../hooks/UseBooksList";

function SearchSection() {
  const { filter, setFilter } = UseBookList();
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default SearchSection;
