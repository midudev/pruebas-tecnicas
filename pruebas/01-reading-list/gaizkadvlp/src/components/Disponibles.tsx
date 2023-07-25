import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../redux/mapStateToProps";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import Libro from "./Libro";
import { Book } from "../interfaces/interfaces";
import Combobox from "./Combobox";
import { TipoGenero } from "../interfaces/enums";
import { cuentaLibros } from "../utils/helper.functions";

const Disponibles: React.FC<any> = (props) => {
  const disponibles: Book[] = props.libreria.disponibles;
  const filtro = props.libreria.filtro;
  let contadorGenero: number = 0;

  const renderBooks = disponibles.map((libro: Book) => {
    //TODO --> Sacarlo a un fichero
    if (filtro === libro.genre || filtro === TipoGenero.TODOS_LOS_GENEROS) {
      if (filtro === libro.genre) {
        contadorGenero++;
      }
      return (
        <li key={libro.ISBN}>
          <Libro libro={libro} />
        </li>
      );
    }
  });

  return (
    <>
      <ul className="disponibles">
        <h2>Disponibles</h2>
        {cuentaLibros(disponibles.length, contadorGenero, filtro)}
        <Combobox />
        {disponibles.length ? renderBooks : <p>No hay disponibles</p>}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Disponibles);
