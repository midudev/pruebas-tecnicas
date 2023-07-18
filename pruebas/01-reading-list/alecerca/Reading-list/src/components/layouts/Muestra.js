import React, { useContext } from 'react';
import LibrosContext from '../../context/librosContext';
import Libro from './Libro';

const Muestra = () => {

    const librosContext = useContext(LibrosContext);
    const {mostrar, libros, flag, flag2} = librosContext;

    return ( 
        <div className='row mt-5'>
            {mostrar.length !== 0 ? 
            (
                mostrar.map(libro => (
                    <Libro
                        key={libro.ISBN}
                        libro={libro}
                    />  
                ))
            ) 
            : 
            (
                libros.map(libro => (
                    <Libro
                        key={libro.ISBN}
                        libro={libro}
                    />
                ))
            )
            }
        </div>
    );
}
 
export default Muestra;