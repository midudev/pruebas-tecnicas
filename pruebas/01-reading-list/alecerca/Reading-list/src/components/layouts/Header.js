import React, { useContext } from 'react';
import LibrosContext from '../../context/librosContext';

const Header = () => {
    
    const librosContext = useContext(LibrosContext)
    const {libros, mostrar, error} = librosContext;

    return ( 
        <header className='app-header'>
            <p className='texto-header'>Listado de libros</p>

            {error ? <p className='alerta-error alerta'>{error}</p> : null}

            {mostrar.length !== 0 ? 
                (
                    <p className='texto-header'>{mostrar.length} libros disponibles</p>
                )
                :
                (
                    <p className='texto-header'>{libros.length} libros disponibles</p>
                )
            }
        </header>
    );
}
 
export default Header;