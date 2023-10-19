import { Router, Route, useLocation } from "react-router-dom";

const SearchItems = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search");
  return (
    <div>
      <h2>Search Results for: {searchTerm}</h2>
      {/* Resto de la lógica de búsqueda y visualización de resultados */}
    </div>
  );
};

export default SearchItems;