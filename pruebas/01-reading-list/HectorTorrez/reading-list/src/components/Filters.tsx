import {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from "../hooks/store"
import { filterByGenre, filterByPages } from '../store/books/slice'

    type maxPagesProps = {
        maxPages: number
    }

export const Filters = ({maxPages}: maxPagesProps) => {
    const book = useAppSelector(state => state.books.books)
    const [selectFilter, setSelectFilter] = useState('')
    const [allGenres, setAllGenres] = useState<string[]>([])
    const[filterPages, setFilterPages] = useState(0) 
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(filterByGenre(selectFilter))
    },[selectFilter])

    useEffect(()=> {
        if(book.length > 0){
            const allGenres = book.map((item) =>  item.book.genre)
            const uniqueGenre = [... new Set (allGenres)]
            setAllGenres(uniqueGenre)
        }
    },[book])

    useEffect(()=>{
        dispatch(filterByPages(filterPages))
    },[filterPages, allGenres])


    //i need to fix this filter
    const handleChangeFilter = (data: number) => {
        setFilterPages(data)
    }
    
    


  return (
    <section className='my-5 px-4'>
        <form className='flex flex-col md:flex-row items-center gap-y-10 md:gap-x-4'>
            <select className='rounded bg-gray-50 ring-1 ring-gray-300 outline-none w-56' onChange={(e)=> setSelectFilter(e.target.value)} >
                <option className='cursor-pointer select-none p-2 hover:bg-gray-200' value="">Género</option>
                {
                    allGenres.map(item => {
                        return <option className='cursor-pointer select-none p-2 hover:bg-gray-200' key={item} value={item}>{item}</option>
                    })
                }
            </select>
            <label className='flex flex-col md:flex-row items-center gap-x-3 font-bold  '>
                    Filtrar por número de páginas
                <input
                    type='range'
                    min='0'
                    max={maxPages}
                    value={filterPages}
                    step='10'
                    onChange={(e)=>handleChangeFilter(e.target.valueAsNumber)}
                    className=' bg-gray-300 h-3 rounded-lg'
                />
                {maxPages}
            </label>
        </form>
    </section>
  )
}