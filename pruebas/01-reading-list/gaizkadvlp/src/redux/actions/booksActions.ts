import { Book } from "../../interfaces/interfaces";
import * as actionTypes from "../types/actionTypes";

const {
  ADD_FAVORITOS,
  REMOVE_FAVORITOS,
  ADD_DISPONIBLES,
  REMOVE_DISPONIBLES,
  DATA_TO_REDUX,
  CHANGE_FILTRO,
  LIBROS_FILTRADOS,
  FETCH_INIT_DATA,
  REMOVE_INIT_FAVORITOS,
} = actionTypes;

export const actionFetchInitData = (libro: Book[]) => {
  return {
    type: FETCH_INIT_DATA,
    payload: libro,
  };
};

export const actionAddFavoritos = (libro: Book) => {
  return {
    type: ADD_FAVORITOS,
    payload: libro,
  };
};

export const actionRemoveFavoritos = (libro: Book) => {
  return {
    type: REMOVE_FAVORITOS,
    payload: libro,
  };
};

export const actionAddDisponibles = (libro: Book) => {
  return {
    type: ADD_DISPONIBLES,
    payload: libro,
  };
};

export const actionRemoveDisponibles = (libro: Book) => {
  return {
    type: REMOVE_DISPONIBLES,
    payload: libro,
  };
};

export const actionDataToRedux = (libreria: Book) => {
  return {
    type: DATA_TO_REDUX,
    payload: libreria,
  };
};

export const actionChangeFiltro = (filtro: string) => {
  return {
    type: CHANGE_FILTRO,
    payload: filtro,
  };
};

export const actionLibrosFiltrados = (libro: Book) => {
  return {
    type: LIBROS_FILTRADOS,
    payload: libro,
  };
};

export const actionRemoveInitiFavoritos = () => {
  return {
    type: REMOVE_INIT_FAVORITOS,
    payload: [],
  };
};
