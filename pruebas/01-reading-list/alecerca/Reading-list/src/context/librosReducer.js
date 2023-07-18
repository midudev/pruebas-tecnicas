import { ELIMINAR_LISTA, ERROR_LIBRO, FILTRAR_AMBOS, FILTRAR_POR_CATEGORIA, FILTRAR_POR_PAGINA, OBTENER_LIBRO, OCULTAR_ERROR, SELECCIONAR_LIBRO } from "../types";

export default (state, action) => {
    switch (action.type) {

        case OBTENER_LIBRO: 
            return{
                ...state,
                libros: action.payload,
                categoria: action.payload,
                mostrar: []
            }

        case SELECCIONAR_LIBRO:
            return{
                ...state,
                libroLeer: [action.payload, ...state.libroLeer],
                libros: state.libros.filter(libro => libro.book !== action.payload.book),
                mostrar: state.mostrar.filter(libro => libro.book !== action.payload.book)
            }

        case ELIMINAR_LISTA:
            if(state.mostrar.length === 0){
                return{
                    ...state,
                    libroLeer: state.libroLeer.filter(libro => libro.book.title !== action.payload.book.title),
                    libros: [action.payload, ...state.libros]
                }
            }else{
                return{
                    ...state,
                    libroLeer: state.libroLeer.filter(libro => libro.book.title !== action.payload.book.title),
                    mostrar: [action.payload, ...state.mostrar]
                }
            }

        case FILTRAR_POR_CATEGORIA:
            return{
                ...state,
                mostrar: state.libros.filter(libro => libro.book.genre === action.payload)
            }
        case FILTRAR_POR_PAGINA:
            return{
                ...state,
                mostrar: state.libros.filter(libro => libro.book.pages == action.payload)
            }
        case FILTRAR_AMBOS:
            return{
                ...state,
                mostrar: state.libros.filter(libro => libro.book.genre === action.payload.cat && libro.book.pages == action.payload.pagina)
            }
        
        case ERROR_LIBRO:
            return{
                ...state,
                error: 'No se han encontrado libros'
            }

        case OCULTAR_ERROR:
            return{
                ...state,
                error: ''
            }

        default:
            return state;
    }
}