import { connect } from "react-redux";
import { mapStateToProps } from "../redux/mapStateToProps";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import Libro from "./Libro";
import { Book } from "../interfaces/interfaces";
import { cuentaLibros } from "../utils/helper.functions";

const Favoritos = (props: any) => {
  const favoritos: Book[] = props.libreria.favoritos;
  let contador: number = 0;

  if (!favoritos) return;

  const renderBooks = favoritos.map((libro: Book) => {
    contador++;
    return (
      <li key={libro.ISBN}>
        <Libro libro={libro} />
      </li>
    );
  });

  return (
    <>
      <ul className="favoritos">
        <h2>Favoritos</h2>
        {cuentaLibros(contador, 0)}
        {favoritos.length ? renderBooks : <p>No hay favoritos</p>}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
