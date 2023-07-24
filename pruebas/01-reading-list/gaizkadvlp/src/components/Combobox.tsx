import { connect } from "react-redux";
import { mapStateToProps } from "../redux/mapStateToProps";
import { mapDispatchToProps } from "../redux/mapDispatchToProps";
import { TipoGenero } from "../interfaces/enums";
import { Book } from "../interfaces/interfaces";

const Combobox: React.FC<any> = (props) => {
  const { disponibles, filtro } = props.libreria;
  const { changeFiltro } = props;
  let genre: string[] = [TipoGenero.TODOS_LOS_GENEROS]; //Tipos de género disponibles para mostrar en el ComboBox
  
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
    <div className="combo">
      <label htmlFor="genero">Filtrar por género:</label>
      <select
      className="combo"
        id="genero"
        defaultValue={filtro}
        onChange={(event) => changeFiltro(event.target.value)}
      >
        <option key={TipoGenero.TODOS_LOS_GENEROS} value= {TipoGenero.TODOS_LOS_GENEROS}>
          Todos los géneros
        </option>
        {getGenero}
        
      </select>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Combobox);
