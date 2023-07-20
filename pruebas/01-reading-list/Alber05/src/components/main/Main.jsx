import React from "react";
import styles from "./main.module.css";

export const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
