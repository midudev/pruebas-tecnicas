import { useEffect, useState } from "react";
import { setListasLibrosFromFiltro } from "../reducers/librosReducer";
import { useDispatch, useSelector } from "react-redux";

export const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const [selectPorDefecto, setSelectPorDefecto] = useState("");

  const { categorias } = useSelector((state) => state.listaLectura);
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const dispatch = useDispatch();

  const handleInputSearchChange = (event) => {
    setBusqueda(event.target.value);
    setSelectPorDefecto('Todas')
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(busqueda);
      dispatch(setListasLibrosFromFiltro(busqueda));
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [busqueda]);

  const handleChangeCategories = (event) => {
    setSelectPorDefecto()
    setBusqueda('')
    dispatch(setListasLibrosFromFiltro(event.target.value));
  };

  return (
    <div className="disponibles__busqueda">
      <span className="disponibles__busqueda__lupa">&#128269;</span>
      <input
        type="text"
        placeholder="Bucar libro"
        className="disponibles__busqueda__input"
        onChange={handleInputSearchChange}
        value={busqueda}
      />
      <select
        value={selectPorDefecto}
        className="disponibles__busqueda__select"
        onChange={handleChangeCategories}
      >
        {categorias.map((categoria, index) => {
          return (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          );
        })}

        {/* <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option> */}
      </select>
    </div>
  );
};
