import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  librosDisponibles: [],
  librosSeleccionados: [],
  librosFiltrados: [],
  categorias: [],
};

export const Libroslice = createSlice({
  name: "listaLectura",
  initialState,
  reducers: {
    setLibrosInicial: (state, action) => {
      state.librosDisponibles = action.payload.disponibles;
      state.librosFiltrados = action.payload.disponibles;
      state.librosSeleccionados = action.payload.seleccionados;
    },
    setListasLibrosFromDisponibles: (state, action) => {
      const disponibles = state.librosDisponibles.filter(
        (item) => item.ISBN !== action.payload.ISBN
      );

      const filtrados = state.librosFiltrados.filter(
        (item) => item.ISBN !== action.payload.ISBN
      );
      const seleccionados = [action.payload, ...state.librosSeleccionados];
      const { categorias } = JSON.parse(localStorage.getItem("listaLectura"));

      state.librosDisponibles = disponibles;
      state.librosSeleccionados = seleccionados;
      state.librosFiltrados = filtrados;
      localStorage.setItem(
        "listaLectura",
        JSON.stringify({
          disponibles: disponibles,
          filtrados: filtrados,
          seleccionados: seleccionados,
          categorias: categorias,
        })
      );
    },
    setListasLibrosFromSeleccionados: (state, action) => {
      const seleccionados = state.librosSeleccionados.filter(
        (item) => item.ISBN !== action.payload.ISBN
      );

      const filtrados = [action.payload, ...state.librosFiltrados];

      const disponibles = [action.payload, ...state.librosDisponibles];
      const { categorias } = JSON.parse(localStorage.getItem("listaLectura"));
      state.librosDisponibles = disponibles;
      state.librosSeleccionados = seleccionados;
      state.librosFiltrados = filtrados;

      localStorage.setItem(
        "listaLectura",
        JSON.stringify({
          disponibles: disponibles,
          filtrados: filtrados,
          seleccionados: seleccionados,
          categorias: categorias,
        })
      );
    },
    setListasLibrosFromFiltro: (state, action) => {
      const busqueda = action.payload.toLowerCase();
      if (busqueda.toLowerCase() !== "todas") {
        const filtrados = state.librosDisponibles.filter((libro) => {
          const tieneTitle = libro.title.toLowerCase().includes(busqueda);
          const tieneGenre = libro.genre.toLowerCase().includes(busqueda);
          // const tieneISBN = libro.ISBN.toLowerCase().includes(busqueda);
          return tieneTitle || tieneGenre;
        });

        console.log(222, state.librosDisponibles)

        state.librosFiltrados = filtrados;
      } else {
        state.librosFiltrados = state.librosDisponibles;
      }
    },
    setCategoriasLibros: (state, action) => {
      state.categorias = action.payload;
    },
    setReorderLibros: (state, action) => {
      const disponibles = JSON.parse(JSON.stringify(state.librosDisponibles));
      const categorias = JSON.parse(JSON.stringify(state.categorias));
      const filtrados = JSON.parse(JSON.stringify(state.librosFiltrados));
      state.librosSeleccionados = action.payload;
      localStorage.setItem(
        "listaLectura",
        JSON.stringify({
          disponibles: disponibles,
          filtrados: filtrados,
          seleccionados: action.payload,
          categorias: categorias,
        })
      );
    },
  },
});

export const {
  setLibrosInicial,
  setListasLibrosFromDisponibles,
  setListasLibrosFromSeleccionados,
  setListasLibrosFromFiltro,
  setCategoriasLibros,
  setReorderLibros
} = Libroslice.actions;
export default Libroslice.reducer;
