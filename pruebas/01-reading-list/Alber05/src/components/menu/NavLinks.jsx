import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import style from "./menu.module.css";

export const NavLinks = () => {
  const { allBooks, libraryBooks } = useContext(DataContext);

  return (
    <div className={style.navLinksContainer}>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? `${style.link} ${style.active}` : style.link}`
        }
        to="/"
      >
        Todos los libros {allBooks.length}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? `${style.link} ${style.active}` : style.link}`
        }
        to="/biblioteca"
      >
        Lista de lectura {libraryBooks.length}
      </NavLink>
    </div>
  );
};
