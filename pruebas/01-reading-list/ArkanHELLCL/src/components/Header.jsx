/* eslint-disable react/prop-types */
import { Filters } from './Filters.jsx'
import { LibraryIcon } from './icons.jsx'
export function Header() {    
    return (
        <header className='grid items-center justify-center'>            
            <h1 className = "text-6xl dark:text-gray-100 text-gray-900 text-center pb-10"><span className="flex items-center justify-center">{LibraryIcon()}</span> Librería</h1>
            <Filters />
        </header>
    )
}