import React from "react";
import noBooks from "../../assets/emptyBooks.webp";
import style from "./noBooks.module.css";

export const EmptyBooks = () => {
  return (
    <main className={style.noBooksMain}>
      <h1 className={style.noBooksTitle}>Vaya! No hay ningún libro por aquí</h1>
      <img src={noBooks} className={style.noBooksImage} />
    </main>
  );
};
