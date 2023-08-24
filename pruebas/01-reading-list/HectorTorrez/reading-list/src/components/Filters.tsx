import {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from "../hooks/store"
import { filterByGenre, filterByName, filterByPages } from '../store/books/slice'
import { Search } from './Icons'

    type maxPagesProps = {
        maxPages: number
    }

export const Filters = ({maxPages}: maxPagesProps) => {
    const book = useAppSelector(state => state.books.books)
    const [selectFilter, setSelectFilter] = useState('')
    const [allGenres, setAllGenres] = useState<string[]>([])
    const[filterPages, setFilterPages] = useState(0) 
    const[filerByName, setFilterByName] = useState('')


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
        dispatch(filterByName(filerByName.toLowerCase()))
    },[filterPages, allGenres,filerByName])


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
                {filterPages}
            </label>
            
            <div className='relative flex items-center'>
            <input type="text" 
                placeholder='Buscador'
                onChange={(e)=> setFilterByName(e.target.value)}
                className='peer cursor-pointer relative z-10 h-12 w-12 rounded-full border border-black bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4'
            />
            <div className='absolute flex items-center inset-y-0 my-auto h-8 w-12  border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black peer-focus:stroke-lime-500'>
            <Search/>

            </div>
            </div>
        </form>
    </section>
  )
}