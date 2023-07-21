import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import style from "./categoryFilter.module.css";

export const CategoryFilter = ({ filterIcon }) => {
  // Obtener el estado y funciones desde el contexto
  const { selectedCategory, allCategories, setSelectedCategory } =
    useContext(DataContext);

  // Función para manejar el cambio de categoría seleccionada
  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={style.categoryFilter}>
      <h4 className={style.categoryFilterH4}>{filterIcon} Categorías:</h4>
      <select
        value={selectedCategory}
        onChange={handleSelectChange}
        className={style.selectCategoryFilter}
      >
        <option value="all">All</option>

        {allCategories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
