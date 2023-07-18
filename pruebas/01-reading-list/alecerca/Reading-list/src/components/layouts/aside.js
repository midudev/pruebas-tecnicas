import React, { useContext } from 'react';
import LibrosContext from '../../context/librosContext';

const Aside = () => {

    const librosContext = useContext(LibrosContext);
    const {libroLeer, eliminarLeer} = librosContext;
    


    return ( 
        <aside>
            <h1 className='mb-3'>Por Leer {libroLeer.length} libros</h1>
            {libroLeer.map(libro => (
                <div className='col-md-5 mb-3'>
                    <div className='card'>
                        <img className='card-img-top' src={libro.book.cover} alt={libro.book.cover}/>
                        <button
                            type='button'
                            className='btn-primary'
                            onClick={() => {
                                eliminarLeer(libro)
                            }}
                        >Eliminar</button>
                    </div>
                </div>
            ))}
        </aside>
    );
}
 
export default Aside;