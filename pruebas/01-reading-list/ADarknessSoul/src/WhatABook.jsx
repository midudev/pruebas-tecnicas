import { useDispatch } from "react-redux";
import { allowSave, getBooks } from "./store/slices/WhatABook";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Filters } from "./components/Filters";
import { Books } from "./components/Books";
import { getLocalStorage } from "./store/slices/WhatABook";

export const WhatABook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Se trae todo el localStorage. En caso de no existir un estado guardado, se traen todos los libros por default. Finamente se habilita el guardado en localStorage para las demás acciones
    dispatch(getLocalStorage());
    dispatch(getBooks());
    dispatch(allowSave());
  }, []);

  return (
    <>
      <Navbar />

      <Filters />

      <Books />
    </>
  );
};
