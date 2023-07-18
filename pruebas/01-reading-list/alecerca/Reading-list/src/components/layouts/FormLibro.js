import React, { useContext, useEffect, useState } from 'react';
import LibrosContext from '../../context/librosContext';



const FormLibro = () => {

    const librosContext = useContext(LibrosContext);
    const { categoria, obtenerLibro, filtrarCategoria, filtrarPagina, filtrarAmbos, errorLibro } = librosContext;

    const [busqueda, setBusqueda] = useState({
        pagina: '',
        cat: ''
    });

    let a = [];
    let b = [];
    categoria.map(cate => a.push(cate.book.genre))

    b = a.filter((item,index)=> {
        return a.indexOf(item) === index
    })

    useEffect(() => {

        obtenerLibro();
        
    }, [])

    const obtenerDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if(busqueda.cat !== '' && busqueda.pagina !== ''){
            filtrarAmbos(busqueda);
            errorLibro();
        }else if(busqueda.cat !== ''){
            filtrarCategoria(busqueda.cat);
        }else if(busqueda.pagina !== ''){
            filtrarPagina(busqueda.pagina);
            errorLibro();
        }else{
            obtenerLibro();
        }
    }
    return ( 
        <form
            onSubmit={onSubmit}
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>Busca Libros por categoria o por cantidad de paginas</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name='pagina'
                        className='form-control'
                        type='number'
                        placeholder='Buscar por cantidad de paginas'
                        onChange={obtenerDatos}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='cat'
                        onChange={obtenerDatos}
                    >
                        <option value="">--Seleccione Categoria--</option>
                        {b.map(categorias => (
                            <option
                                key={categorias}
                                value={categorias}
                            >{categorias}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn-block btn-primary'
                        value="Buscar Libros"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default FormLibro;