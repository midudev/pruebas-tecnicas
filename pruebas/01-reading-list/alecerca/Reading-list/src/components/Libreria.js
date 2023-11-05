import React from 'react';
import Aside from './layouts/aside';
import FormLibro from './layouts/FormLibro';
import Muestra from './layouts/Muestra';

const Libreria = () => {
    return (
        <div className='contenedor-app'>
            <Aside/>
            <div className='seccion-principal'>
                <main>
                    <FormLibro/>
                    <div className='contenedor-libros'>
                        <Muestra/>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Libreria;