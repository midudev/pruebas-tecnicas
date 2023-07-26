import { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import style from "./header.module.css";
import { DataContext } from "../../context/DataContext";

export const Browser = () => {
  const { search, setSearch } = useContext(DataContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.browserContainer}>
      <input
        type="text"
        className={style.browser}
        onChange={handleChange}
        value={search}
        placeholder="Busqueda por título o autor"
      />
      <BiSearchAlt color="black" />
    </div>
  );
};
