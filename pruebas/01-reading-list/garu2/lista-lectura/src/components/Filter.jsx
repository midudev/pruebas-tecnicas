import { useState } from "react";
//import { filterCat } from "../helpers/filterCat"  
import { filterTitle } from "../helpers/filterTitle";
import { getTitles } from "../helpers/getTitles";

const Filter = ({ data, setCategory, category, setData }) => {
  const [search, setSearch] = useState("");
  const titles = getTitles(data);

  const handlerCat = (value) => {
    value===""?setCategory(value):setCategory(`c-${value}`)
    //console.log('val: ', value);
    //setCategory(`c-${value}`)
    //const newData = filterCat(data, value);
    //setData(newData)
  }

  const handlerSearch = (e) => {
    e.preventDefault();
    setCategory(`s-${search}`)
    //console.log('search: ', search);
    //console.log('res: ', filterTitle(data, search));
    //setData(filterTitle(data, search))
    setSearch("")
  }

  return (
    <ul className="">
      <li className="flex gap-2">
        🔎<form onSubmit={handlerSearch}>
          <input
            className="bg-transparent outline-none"
            type="search"
            placeholder="Buscar libro"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            name=""
            id=""
            list="lista"
          />
          <datalist id="lista">
            {
              titles.map((item, index) => (
                <option key={index} value={item}></option>
              ))
            }
          </datalist>
        </form>
      </li>
      <li
        className={category === "" ? "current-cat" : ""}
        onClick={(e) => handlerCat("")}>
        🦄🤖 Todos 🧟👻
      </li>
      <li
        className={category === "c-Fantasía" ? "current-cat" : ""}
        onClick={(e) => handlerCat("Fantasía")}
      >
        🦄 Fantasía
      </li>
      <li
        className={category === "c-Ciencia ficción" ? "current-cat" : ""}
        onClick={(e) => handlerCat("Ciencia ficción")}>
        🤖 Ciencia ficción
      </li>
      <li
        className={category === "c-Zombies" ? "current-cat" : ""}
        onClick={(e) => handlerCat("Zombies")}
      >🧟 Zombies
      </li>
      <li
        className={category === "c-Terror" ? "current-cat" : ""}
        onClick={(e) => handlerCat("Terror")}>
        👻 Terror
      </li>
    </ul>
  )
}

export default Filter