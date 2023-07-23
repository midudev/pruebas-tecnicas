/* import { Book, Library } from "../interfaces/interfaces";

interface Mierda {
    disponibles: Book[] | null,
    favoritos: Book[] | null

}

export interface EstadoAplicacion {
    libbrr: Mierda
    
}

const initialState: EstadoAplicacion = {
    libbrr: {
        disponibles: null,
        favoritos: null
    }

}

export function mapStateToProps(state: EstadoAplicacion): EstadoAplicacion {
    return state;
}

export default initialState; */

import { TipoGenero } from "../interfaces/enums";
import { Book } from "../interfaces/interfaces";

export interface EstadoAplicacion {
  disponibles: Book[];
  favoritos: Book[];
  filtro: TipoGenero | string;
  filtrados: Book[];
}

/* const initialState: EstadoAplicacion = {
  disponibles: [],
  favoritos: [],
  filtro: TipoGenero.TODOS_LOS_GENEROS, // TODO --> TipoGenero.TODOS_LOS_GENEROS,
  filtrados: [],
}; */

export function mapStateToProps(state: EstadoAplicacion): EstadoAplicacion {
  return state;
}

//export default initialState;
