import {useId} from 'react'
import { useFilters } from '../hook/useFilters'

export const Header = () =>{
    const idGenero = useId()
    const idRange = useId()
    const {setFilters} = useFilters()

    const handleChange = (e) =>{
        setFilters({
            genre: e.target.value
        })
    }

    return (
        <header>
            <h1>Recomendación de libros</h1>
            <fieldset className='header'>
            <div>
                <label htmlFor={idRange}>Paginado</label>
                <input id={idRange} type="range" min='0' max='10'/>
            </div>
            
            <div>
                <label htmlFor={idGenero}>Genero</label>
                <select id={idGenero} onClick={handleChange}>
                <option value='all'>Todas</option>
                <option value='Fantasía'>Fantasía</option>
                <option value='Ciencia ficción'>Ciencia ficción</option>
                <option value='Zombies'>Zombies</option>
                <option value='Terror'>Terror</option>
                </select>
            </div>
            

            </fieldset>
        </header>
    )
}