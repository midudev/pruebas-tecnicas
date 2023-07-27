

// Estado inicial del store
let initialState = {
  allBooks: [],
  disponibilityBooks: [], 
  toRead: [],
  counterToRead: 0,
  counterDisp: 0,
  pages: 0
};

// Reducer que gestiona las acciones y modifica el estado
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOKS": 
      // Acción para obtener la lista de libros
      return {
        ...state,
        allBooks: action.payload,
        disponibilityBooks: action.payload,
        counterToRead: state.toRead.length,
        counterDisp: state.disponibilityBooks.length - state.toRead.length,
      };

    case "ADD_TOREAD":
      // Acción para añadir un libro a la lista de "Para leer"
      console.log("reducer", action.payload); // Mensaje de depuración para verificar el libro que se está agregando
      return {
        ...state,
        toRead: [...state.toRead, action.payload],
        disponibilityBooks: state.disponibilityBooks.filter((book) => book.ISBN !== action.payload.ISBN),
        counterToRead: state.counterToRead + 1,
        counterDisp: state.counterDisp - 1,
      };

    case "REMOVE_TOREAD":
      // Acción para eliminar un libro de la lista de "Para leer"
      return {
        ...state,
        disponibilityBooks: [...state.disponibilityBooks, action.payload],
        toRead: state.toRead.filter((book) => book.ISBN !== action.payload.ISBN),
        counterToRead: state.counterToRead - 1,
        counterDisp: state.counterDisp + 1,
      };

    case "FILTER":
      // Acción para filtrar libros por género
      if (action.payload === "all") {
        return {
          ...state,
          disponibilityBooks: state.allBooks
        };
      } else {
        return {
          ...state,
          disponibilityBooks: state.allBooks.filter((book) => book.genre === action.payload)
        };
      }

    case "FILTER_PAGES":
      // Acción para filtrar libros por cantidad de páginas
      return {
        ...state,
        pages: action.payload
      };

    default:
      return state;
  }
};
