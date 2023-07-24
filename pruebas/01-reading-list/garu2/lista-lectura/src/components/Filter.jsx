//import { useState } from "react";
//import { filterCat } from "../helpers/filterCat"  

const Filter = ({ data, setCategory, category }) => {
  //const [list, setList] = useState(data);

  const handlerCat = (value) => {
    console.log('val: ', value);
    setCategory(value)
    //const newData = filterCat(data, value);
    //setData(newData)
  }

  return (
    <ul>
      <li
        className={category === "" ? "current-cat":""}
        onClick={(e) => handlerCat("")}>
        🦄🤖 Todos 🧟👻
      </li>
      <li
        className={category === "Fantasía" ? "current-cat":""}
        onClick={(e) => handlerCat("Fantasía")}
      >
        🦄 Fantasía
      </li>
      <li
        className={category === "Ciencia ficción" ? "current-cat":""}
        onClick={(e) => handlerCat("Ciencia ficción")}>
        🤖 Ciencia ficción
      </li>
      <li
        className={category === "Zombies" ? "current-cat":""}
        onClick={(e) => handlerCat("Zombies")}
      >🧟 Zombies
      </li>
      <li
        className={category === "Terror" ? "current-cat":""}
        onClick={(e) => handlerCat("Terror")}>
        👻 Terror
      </li>
    </ul>
  )
}

export default Filter