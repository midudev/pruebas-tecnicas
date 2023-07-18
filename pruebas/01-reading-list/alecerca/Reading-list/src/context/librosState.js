import React, {useReducer} from 'react';
import LibrosContext from './librosContext';
import LibrosReducer from './librosReducer';
import clienteAxios from '../config/axios';
import { ELIMINAR_LISTA, ERROR_LIBRO, FILTRAR_AMBOS, FILTRAR_POR_CATEGORIA, FILTRAR_POR_PAGINA, OBTENER_LIBRO, OCULTAR_ERROR, SELECCIONAR_LIBRO } from '../types';

const LibrosState = props => {
    const initialState = {
        libros: [],
        error: '',
        libroLeer: [],
        mostrar: [],
        categoria: []
    }


    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(LibrosReducer, initialState);

    //serie de funciones para el crud
    const obtenerLibro = async () => {
        try {
            const respuesta = await clienteAxios.get('/library');
            dispatch({
                type: OBTENER_LIBRO,
                payload: respuesta.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    const filtrarCategoria = dato => {
        dispatch({
            type: FILTRAR_POR_CATEGORIA,
            payload: dato
        })
    }

    const filtrarPagina = dato => {
        dispatch({
            type: FILTRAR_POR_PAGINA,
            payload: dato
        })
    }

    const filtrarAmbos = (dato) => {
        dispatch({
            type: FILTRAR_AMBOS,
            payload: dato
        })
    }

    const obtenerLeer = dato => {
        dispatch({
            type: SELECCIONAR_LIBRO,
            payload: dato
        })
    }

    const errorLibro = () => {
        dispatch({
            type: ERROR_LIBRO
        })
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ERROR
            })
        }, 4000);
    }

    const eliminarLeer = dato => {
        dispatch({
            type: ELIMINAR_LISTA,
            payload: dato
        })
    }

    return(
        <LibrosContext.Provider
            value={{
                libros: state.libros,
                error: state.error,
                libroLeer: state.libroLeer,
                mostrar: state.mostrar,
                categoria: state.categoria,
                obtenerLibro,
                obtenerLeer,
                eliminarLeer,
                filtrarCategoria,
                filtrarPagina,
                filtrarAmbos,
                errorLibro
            }}
        >
            {props.children}
        </LibrosContext.Provider>
    );

}

export default LibrosState;