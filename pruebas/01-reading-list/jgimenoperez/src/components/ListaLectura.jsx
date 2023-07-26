import { Disponibles, } from "./Disponibles";
import { Seleccionados } from "./Seleccionados";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions } from "../types/types";

export const ListaLectura = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch({
          type: actions.GET_LISTALECTURA,
        });
      } catch (error) {
        console.warn("Error al obtener o actualizar los datos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="listaLectura">
      <Disponibles />
      <Seleccionados />
    </div>
  );
};
