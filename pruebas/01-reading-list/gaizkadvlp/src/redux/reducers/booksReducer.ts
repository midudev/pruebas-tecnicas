import * as actionTypes from "../types/actionTypes";
import { Book, EstadoAplicacion } from "../../interfaces/interfaces";
import { TipoGenero } from "../../interfaces/enums";
import { REMOVE_INIT_FAVORITOS } from "../types/actionTypes";

const {
  FETCH_INIT_DATA,
  ADD_FAVORITOS,
  REMOVE_FAVORITOS,
  ADD_DISPONIBLES,
  REMOVE_DISPONIBLES,
  DATA_TO_REDUX,
  CHANGE_FILTRO,
  LIBROS_FILTRADOS,
} = actionTypes;

const initialState: EstadoAplicacion = {
  disponibles: [],
  favoritos: [],
  filtro: TipoGenero.TODOS_LOS_GENEROS,
  filtrados: [],
};

const booksReducer = (state: EstadoAplicacion = initialState, action: any) => {
  switch (action.type) {
    case FETCH_INIT_DATA:
      return {
        ...state,
        disponibles: action.payload,
      };
    case ADD_FAVORITOS:
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case REMOVE_FAVORITOS:
      const removeFavoriteBook = state.favoritos.filter(
        (book: Book) => book.ISBN != action.payload.ISBN
      );
      return {
        ...state,
        favoritos: removeFavoriteBook,
      };
    case ADD_DISPONIBLES:
      return {
        ...state,
        disponibles: [...state.disponibles, action.payload],
      };
    case REMOVE_DISPONIBLES:
      const removeDispoBook = state.disponibles.filter(
        (book: Book) => book.ISBN != action.payload.ISBN
      );
      return {
        ...state,
        disponibles: removeDispoBook,
      };
    case DATA_TO_REDUX:
      return {
        ...state,
        disponibles: action.payload,
      };
    case CHANGE_FILTRO:
      return {
        ...state,
        filtro: action.payload,
      };
    case LIBROS_FILTRADOS:
      return {
        ...state,
        filtro: action.payload,
      };
    case REMOVE_INIT_FAVORITOS:
      return {
        ...state,
        favoritos: [],
      };
    default:
      return state;
  }
};

export default booksReducer;
