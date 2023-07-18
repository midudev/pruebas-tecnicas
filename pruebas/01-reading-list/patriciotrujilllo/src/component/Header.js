import { useId,} from 'react'
import { useFilters } from '../hook/useFilters'
import { useListBook } from '../hook/useListBook'

export const Header = ({bookNoFiltered}) =>{
    const idGenero = useId()
    const idRange = useId()
    const idSeacher = useId()
    const {filters,setFilters} = useFilters()
    const { read } = useListBook()

    const notFiltered = bookNoFiltered.filter(item=> !read.find(book => book.ISBN === item.book.ISBN))

    const amountGeneralList = (notFiltered.filter(item=> filters.genre=== 'all' || item.book.genre===filters.genre)).length
    const AmountInListToRead = (read.filter(item=> filters.genre=== 'all' || item.genre===filters.genre)).length

    const handleChange = (e) =>{

        setFilters(prevState=>({
            ...prevState,
            genre: e.target.value
        }))
    }
    const handleChangePages = (e) =>{
        setFilters(prevState=>({
            ...prevState,
            pages: e.target.value
        }))
    }
    const handleChangeSeach = (e) =>{
        setFilters(prevState=>({
            ...prevState,
            title: e.target.value
        }))
    }

    return (
        <header>
            <h1>Recomendación de libros</h1>
            <fieldset className='header'>
            <div>
                <label htmlFor={idSeacher}></label>
                <input id={idSeacher} type="text" onChange={handleChangeSeach}/>
            </div>

            <div>
                <label htmlFor={idRange}>Paginado: {filters.pages}</label>
                <input id={idRange} type="range" min='0' max='2000' onChange={handleChangePages} value={filters.pages}/>
            </div>
            
            <div>
                <label htmlFor={idGenero}>Genero</label>
                <select id={idGenero} onChange={handleChange}>
                <option value='all'>Todas</option>
                <option value='Fantasía'>Fantasía</option>
                <option value='Ciencia ficción'>Ciencia ficción</option>
                <option value='Zombies'>Zombis</option>
                <option value='Terror'>Terror</option>
                </select>
            </div>
            </fieldset>
            <div data-testid='class-container-h4'>
                <h4>{amountGeneralList} libros disponibles</h4>
                <h4>{AmountInListToRead} libros en lista lectura: </h4>
            </div>
        </header>
    )
}