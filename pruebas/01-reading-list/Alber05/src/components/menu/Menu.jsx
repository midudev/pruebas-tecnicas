import React from "react";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";
import { PageSlider } from "./PageSlider";
import CategoryFilter from "./CategoryFilter";

export const Menu = () => {
  return (
    <div className={style.navContainer}>
      <nav className={style.navBar}>
        <div className={style.filtersContainer}>
          <PageSlider />
          <CategoryFilter />
        </div>
        <div className={style.navLinksContainer}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? `${style.link} ${style.active}` : style.link}`
            }
            to="/"
          >
            Todos los libros
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? `${style.link} ${style.active}` : style.link}`
            }
            to="/biblioteca"
          >
            Lista de lectura
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
