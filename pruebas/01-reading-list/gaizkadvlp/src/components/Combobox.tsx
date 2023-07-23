import { connect } from "react-redux";
import { mapStateToProps } from "../redux/estado-aplicacion";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import { TipoGenero } from "../interfaces/enums";
import { Book } from "../interfaces/interfaces";

const Combobox: React.FC<any> = (props) => {
  //console.log(props)
  const { disponibles, filtro } = props.libreria;
  const { changeFiltro } = props;
  let genre: string[] = [TipoGenero.TODOS_LOS_GENEROS];
  
  const getGenero = disponibles.map((libro: Book) => {
    if (!genre.includes(libro.genre)) {
      genre.push(libro.genre);
      return (
        <option key={libro.genre} value={libro.genre}>
          {libro.genre}
        </option>
      );
    }
  });

  return (
    <>
      <label htmlFor="genero">Filtrar por genero</label>
      <select
        id="genero"
        defaultValue={filtro}
        onChange={(event) => changeFiltro(event.target.value)}
      >
        <option key={TipoGenero.TODOS_LOS_GENEROS} value= {TipoGenero.TODOS_LOS_GENEROS}>
          Todos los géneros
        </option>
        {getGenero}
        
      </select>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Combobox);
