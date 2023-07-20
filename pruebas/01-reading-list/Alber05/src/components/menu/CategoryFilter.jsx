import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import style from "./menu.module.css";

const CategoryFilter = () => {
  // Obtener el estado y funciones desde el contexto
  const { selectedCategory, allCategories, setSelectedCategory } =
    useContext(DataContext);

  // Función para manejar el cambio de categoría seleccionada
  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={style.categoryFilter}>
      <h4>Filtrar por categoría:</h4>
      <select
        value={selectedCategory}
        onChange={handleSelectChange}
        className={style.selectCategoryFilter}
      >
        <option value="all">All</option>
        {/* Mapear las categorías para crear las opciones del selector */}
        {allCategories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
