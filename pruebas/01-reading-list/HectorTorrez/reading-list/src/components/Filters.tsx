import {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from "../hooks/store"
import { filterByGenre } from '../store/books/slice'

export const Filters = () => {
    const book = useAppSelector(state => state.books.books)
    const [selectFilter, setSelectFilter] = useState('')
    const [allGenres, setAllGenres] = useState<string[]>([])
    // const[filterPages, setFilterPages] = useState(0) 
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
        

  return (
    <section className='my-5 px-4'>
        <form>
            <select className='rounded bg-gray-50 ring-1 ring-gray-300 outline-none w-56' onChange={(e)=> setSelectFilter(e.target.value)} >
                <option className='cursor-pointer select-none p-2 hover:bg-gray-200' value="">Genre</option>
                {
                    allGenres.map(item => {
                        return <option className='cursor-pointer select-none p-2 hover:bg-gray-200' key={item} value={item}>{item}</option>
                    })
                }
            </select>
            <label>
                Filter by number of pages
                <input
                    type='range'
                    min='0'
                    max='1000'
                />

            </label>
        </form>
    </section>
  )
}