import React from "react";
import { PageSlider } from "./PageSlider";
import { CategoryFilter } from "./CategoryFilter";
import { NavLinks } from "./NavLinks";
import style from "./menu.module.css";

export const Menu = () => {
  return (
    <div className={style.navContainer}>
      <nav className={style.navBar}>
        <div className={style.filtersContainer}>
          <PageSlider />
          <CategoryFilter />
        </div>
        <NavLinks />
      </nav>
    </div>
  );
};
