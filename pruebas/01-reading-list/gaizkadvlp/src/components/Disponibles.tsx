import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../redux/estado-aplicacion";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import Libro from "./Libro";
import { Book } from "../interfaces/interfaces";
import Combobox from "./Combobox";
import { TipoGenero } from "../interfaces/enums";
import { cuentaLibros } from "../utils/helper.functions";

//const Disponibles = (props: any) => {
const Disponibles: React.FC<any> = (props) => {
  //console.log(props);
  const disponibles: Book[] = props.libreria.disponibles;
  const filtro = props.libreria.filtro;
  let contador: number = 0;

  const renderBooks = disponibles.map((libro: Book) => {
    //TODO --> Sacarlo a un fichero
    if (filtro === libro.genre || filtro === TipoGenero.TODOS_LOS_GENEROS) {
      contador++;
      return (
        <li className="libro" key={libro.ISBN}>
          <Libro libro={libro} />
        </li>
      );
    }
  });

/*   const cuentaLibros2 = () => {
    if (contador === 0) return <p>No hay libros disponibles</p>;
    if (contador === 1) return <p>Hay {contador} libro disponible</p>;
    return <p>Hay {contador} libros disponibles</p>;
  }; */

  return (
    <>
      <ul className="listaLibros disponibles">
        <h2>Disponibles</h2>
        <Combobox />
        {cuentaLibros(contador)}
        {disponibles.length ? renderBooks : <p>No hay disponibles</p>}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Disponibles);
