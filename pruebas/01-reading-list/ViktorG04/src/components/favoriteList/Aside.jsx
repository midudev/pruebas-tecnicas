import React from "react";
import ReadList from "./ReadList";
import { useSelector } from "react-redux";
import "./index.css";

const Aside = () => {
  const { favoriteBooks, inList } = useSelector((state) => state.books);
  const { theme } = useSelector((state) => state.theme);

  return (
    <section
      className="aside"
      style={inList ? null : { display: "none" }}
      id={theme ? "Dark-gradient" : "Light-gradient"}
    >
      <h2>{inList} books in list</h2>
      <ReadList books={favoriteBooks} />
    </section>
  );
};

export default Aside;
