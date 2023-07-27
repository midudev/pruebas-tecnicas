import { useId,} from 'react'
import { useFilters } from '../hook/useFilters'
import { useListBook } from '../hook/useListBook'
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
import Form from 'react-bootstrap/Form'

export const Filters = ({bookNoFiltered}) =>{
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
    const handleChangePages = ([pagMin,pagMax]) =>{
        setFilters(prevState=>({
            ...prevState,
            pages: [pagMin,pagMax]
        }))
    }
    const handleChangeSeach = (e) =>{
        setFilters(prevState=>({
            ...prevState,
            title: e.target.value
        }))
    }

    return (
        <>
        <div data-testid='class-container-h4' className='book-available'>
                <h4>{amountGeneralList} libros disponibles</h4>
                <h4>{AmountInListToRead} libros en lista lectura: </h4>
        </div>
        <div className='filters-container'>
            
            <Form className='input-seach'>
                
                    <Form.Label htmlFor={idSeacher}></Form.Label>
                    <Form.Control size='lg' id={idSeacher} type="text" onChange={handleChangeSeach}/>
                
            </Form>

            <div className="range-values">
            
                <span>{filters.pages[0]}</span>
                <span>{filters.pages[1]}</span>
            </div>

            <Slider range min={0} max={2000} onChange={handleChangePages} value={filters.pages}/>
            
            
            <div className='selector-genre'>
                <label htmlFor={idGenero}></label>
                <Form.Select id={idGenero} onChange={handleChange}>
                <option value='all'>Todas</option>
                <option value='Fantasía'>Fantasía</option>
                <option value='Ciencia ficción'>Ciencia ficción</option>
                <option value='Zombies'>Zombis</option>
                <option value='Terror'>Terror</option>
                </Form.Select>
            </div>
            
        </div>
        </>
    )
}