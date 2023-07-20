import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navLinks.module.css";

export const NavLinks = () => {
  return (
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
  );
};
