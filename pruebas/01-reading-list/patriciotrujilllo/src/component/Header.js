import { useId,} from 'react'
import { useFilters } from '../hook/useFilters'
import { useListBook } from '../hook/useListBook'

export const Header = ({bookNoFiltered}) =>{
    const idGenero = useId()
    const idRange = useId()
    const {filters,setFilters} = useFilters()
    const { read } = useListBook()

    const notFiltered = bookNoFiltered.filter(item=> !read.find(book => book.ISBN === item.book.ISBN))

    const amountGeneralList = (notFiltered.filter(item=> filters.genre=== 'all' || item.book.genre===filters.genre)).length
    const AmountInListToRead = (read.filter(item=> filters.genre=== 'all' || item.genre===filters.genre)).length

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
            <div>
                <h4>{amountGeneralList} libros disponibles</h4>
                <h4>{AmountInListToRead} libros en lista lectura: </h4>
            </div>
        </header>
    )
}