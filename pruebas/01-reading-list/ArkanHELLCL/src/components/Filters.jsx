/* eslint-disable react/prop-types */
import { useId } from 'react';
import { useLibraryStat } from  '../hooks/useLibraryStat.jsx'
import { useFilters } from '../hooks/useFilters.jsx'
import { useReadingList } from '../hooks/useReadingList.jsx';
import { useSearch } from '../hooks/useSearch.jsx';

export function Filters () {
    const { filters, setFilters } = useFilters()
    const { itemAuthor, itemGenre, itemType } = useLibraryStat()
    const { readingList } = useReadingList()
    const { search, error } = useSearch(filters, setFilters)

    const today = new Date();
    const genres = itemGenre.type    
    const authors = itemAuthor.type    
    const types = itemType.type

    const typeFilterId = useId()
    const genreFilterId = useId()
    const authorFilterId = useId()
    const yearFilterId = useId()    
    const pageSizeFilterid = useId()
    const totalSizeFilterid = useId()

    const lisItems = filters.itemsFileterd.map(item => item)
    const itemsAvailable = lisItems.filter(item => !readingList.some((element) => element.id === item.id))
    const totalItemesAvailable = itemsAvailable.length    

    const handleChangeMinYear = () => (e) => {         
        setFilters(prevState => ({
            ...prevState, 
            year: e.target.value,
            page: 1
        }))
    }

    const handleChangeGenre = () => (e) => {        
        setFilters(prevState => ({
            ...prevState,
            genre: e.target.value,
            page: 1
        }))
    }
    const handleChangeAuthor = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            author: e.target.value,
            page: 1
        }))
    }
    const handleChangeType = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            type: e.target.value,
            page: 1
        }))
    }
    const handleChangepageSize = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            pageSize: e.target.value,
            page: 1
        }))
    }

    const handleChangetotalSize = () => (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            totalPages: e.target.value,
            page: 1
        }))
    }

    const handleChange = (e) => {        
        setFilters(prevState => ({
            ...prevState, 
            search: e.target.value,
            page: 1
        }))        
    }
    
    return(
        <>
            <section className='pt-5 grid grid-cols-2 gap-5 align-middle text-left'>
                <div className="grid mt-2">
                    <div>
                        <span className ="bg-green-200 text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 pb-1 rounded-full dark:bg-green-900 dark:text-green-300">Disponibles : {totalItemesAvailable}</span>
                    </div>
                </div>
                <div className="grid">                    
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input name="query" onChange={handleChange} value={search} placeholder='Harry Potter, Dracula ...' className={`block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `} />                            
                    </div>                    
                    {error && <p className="text-red-500 text-xs italic pt-2">{error}</p>}
                </div>                
            </section>
            <section className="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 min-w-fit pt-4 grid-col items-center">
                <div className="mb-2 grid">                
                    <label htmlFor={typeFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Tipo :</label>
                    <select id={typeFilterId} onChange={handleChangeType()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option key="all" value="all" selected>Selecciona un Tipo</option>
                        {types.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2 grid">                
                    <label htmlFor={authorFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Autor :</label>
                    <select id={authorFilterId} onChange={handleChangeAuthor()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option key="all" value="all" selected>Selecciona un Autor</option>
                        {authors.map((author) => (
                            <option key={author} value={author}>{author}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2 grid">                
                    <label htmlFor={genreFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Género :</label>
                    <select id={genreFilterId} onChange={handleChangeGenre()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option key="all" value="all" selected>Selecciona un Género</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-2 grid">
                    <label htmlFor={yearFilterId} className="block mb-2 text-gray-900 dark:text-gray-100">Año desde:</label>
                    <input
                        type='range'
                        id={yearFilterId}
                        onChange={handleChangeMinYear()}
                        min={1800}
                        max={today.getFullYear()}
                        step={1}
                        value={filters.year}
                    />
                    <span className="block text-gray-900 dark:text-gray-100 text-right">{filters.year}</span>                
                </div> 

                <div className="mb-2 grid">
                    <label htmlFor={totalSizeFilterid} className="block mb-2 text-gray-900 dark:text-gray-100">Páginas mayor a:</label>
                    <input
                        type='range'
                        id={totalSizeFilterid}
                        onChange={handleChangetotalSize()}
                        min={0}
                        max={1000}
                        step={1}
                        value={filters.totalPages}
                    />
                    <span className="block text-gray-900 dark:text-gray-100 text-right">{filters.totalPages}</span>                
                </div> 

                <div className="mb-2 grid">
                    <label htmlFor={pageSizeFilterid} className="block mb-2 text-gray-900 dark:text-gray-100">Items por página</label>
                    <input
                        type='range'
                        id={pageSizeFilterid}
                        onChange={handleChangepageSize()}
                        min={1}
                        max={12}
                        step={1}
                        value={filters.pageSize}
                    />
                    <span className="block text-gray-900 dark:text-gray-100 text-right">{filters.pageSize}</span>                
                </div> 
            </section>            
        </>
    )
}