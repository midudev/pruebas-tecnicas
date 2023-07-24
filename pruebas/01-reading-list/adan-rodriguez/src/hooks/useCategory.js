import { useState } from "react";

export function useCategory() {
  const [category, setCategory] = useState("");

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
  };

  return {
    handleCategoryFilter,
    category,
  };
}
