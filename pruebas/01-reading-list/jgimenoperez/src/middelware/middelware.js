import {
  setLibrosInicial,
  setCategoriasLibros,
} from "../reducers/librosReducer";
import { actions } from "../types/types";

export const customMiddleware = (store) => (next) => async (action) => {
  // const state = store.getState();
  let listaLecturaLocalStorage = {};

  switch (action.type) {
    case actions.GET_LISTALECTURA:
      listaLecturaLocalStorage = localStorage.getItem("listaLectura");

      if (!listaLecturaLocalStorage) {
        fetch("/data/books.json")
          .then((response) => response.json())
          .then((data) => {
            // quito la parte de books aplanando el array
            // guardo la info en el state y el localSotrage
            //Las siguientes cargas siempre se obtendran desde el localStorage
            const nuevaListaFormateada = data.map((item) => item.book);
            store.dispatch(
              setLibrosInicial({
                disponibles: nuevaListaFormateada,
                filtrados: nuevaListaFormateada,
                seleccionados: [],
              })
            );

            //obentengo del array original de libros todas las categorias
            let categoriasUnicas = [
              ...new Set(nuevaListaFormateada.map((item) => item.genre)),
            ];
            categoriasUnicas = ['Todas',...categoriasUnicas]
            store.dispatch(setCategoriasLibros(categoriasUnicas));

            localStorage.setItem(
              "listaLectura",
              JSON.stringify({
                disponibles: nuevaListaFormateada,
                filtrados: nuevaListaFormateada,
                seleccionados: [],
                categorias:categoriasUnicas
              })
            );
          })
          .catch((error) => {
            console.error(
              "Error al cargar los datos desde el archivo JSON:",
              error
            );
          });
      } else {
        store.dispatch(setLibrosInicial(JSON.parse(listaLecturaLocalStorage)));
        store.dispatch(setCategoriasLibros(JSON.parse(listaLecturaLocalStorage).categorias));
      }

      break;

    default:
      return next(action);
  }
};
