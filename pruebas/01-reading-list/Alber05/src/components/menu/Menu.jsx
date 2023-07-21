import React from "react";
import { PageSlider } from "./PageSlider";
import { CategoryFilter } from "./CategoryFilter";
import { NavLinks } from "./NavLinks";
import style from "./menu.module.css";
import { MdFilterAlt } from "react-icons/md";

export const Menu = () => {
  return (
    <div className={style.navContainer}>
      <nav className={style.navBar}>
        <div className={style.filtersContainer}>
          <PageSlider filterIcon={<MdFilterAlt />} />
          <CategoryFilter filterIcon={<MdFilterAlt />} />
        </div>
        <NavLinks />
      </nav>
    </div>
  );
};
