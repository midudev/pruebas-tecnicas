import { connect } from "react-redux";
import { Book } from "../interfaces/interfaces";
import { mapStateToProps } from "../redux/mapStateToProps";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import { removeFavorite, saveFavorito } from "../utils/helper.functions";

const Libro = (props: any) => {
  const { addFavo, removeFavo, addDisponibles, removeDisponibles } = props;
  const { title, cover, ISBN } = props.libro;

  const handleAdd = (ISBN: Book["ISBN"]) => {
    const { libro } = props;
    const { disponibles, favoritos } = props.libreria;

    disponibles.forEach((element: Book) => {
      if (element.ISBN === ISBN) {
        addFavo(libro); //Se añade a favoritos
        removeDisponibles(libro); //Se borra de Disponibles
        saveFavorito(libro); //Se guarda en localStorage
      }
    });
    favoritos.forEach((element: Book) => {
      if (element.ISBN === ISBN) {
        removeFavo(libro); //Se borra de favoritos
        addDisponibles(libro); //Se añade a disponibles
        removeFavorite(element); //Se borra de localStorage
      }
    });
  };

  return (
    <div className="libro">
      <h3>{title}</h3>
      <img
        src={cover}
        alt={title}
        className="portada"
        onClick={() => handleAdd(ISBN)}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Libro);
