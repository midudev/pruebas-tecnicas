import { Action } from "@reduxjs/toolkit";
import { Book } from "../interfaces/interfaces";
import {
  actionAddFavoritos,
  actionRemoveFavoritos,
  actionAddDisponibles,
  actionRemoveDisponibles,
  actionDataToRedux,
  actionChangeFiltro,
  actionLibrosFiltrados,
  actionRemoveInitiFavoritos
} from "./actions/booksActions";

export const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => {
  return {
    addFavo: (libro: Book) => dispatch(actionAddFavoritos(libro)),
    removeFavo: (libro: Book) => dispatch(actionRemoveFavoritos(libro)),
    addDisponibles: (libro: Book) => dispatch(actionAddDisponibles(libro)),
    removeDisponibles: (libro: Book) => dispatch(actionRemoveDisponibles(libro)),
    dataToRedux: (libreria: Book) => dispatch(actionDataToRedux(libreria)),
    changeFiltro: (filtro: string) => dispatch(actionChangeFiltro(filtro)),
    librosFiltrados: (libro: Book) => dispatch(actionLibrosFiltrados(libro)),
    removeInitFavoritos: () => dispatch(actionRemoveInitiFavoritos())
  };
};
