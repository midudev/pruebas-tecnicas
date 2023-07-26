import React from "react";
import style from "./header.module.css";
import { Browser } from "./Browser";

export const Header = () => {
  return (
    <header className={style.header}>
      <Browser />
    </header>
  );
};
