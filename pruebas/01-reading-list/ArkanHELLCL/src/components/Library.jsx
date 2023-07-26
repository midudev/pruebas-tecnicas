/* eslint-disable react/prop-types */
import { useReadingList } from "../hooks/useReadingList"
import { CheckIcon } from "./icons.jsx";

export function Library({ library }) {
    const { addToReadingList, removeFromReadingList, readingList } = useReadingList()    

    const isInReadinList = (item) =>{
        return readingList.some((element) => element.ISBN === item.ISBN)
    }

    return (        
        <ul className="list-none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 min-w-fit pt-20 grid-col items-center content-center">
            {library.map(item => (
                <li key={item[Object.keys(item)[0]].ISBN} className="w-full flex items-center justify-between relative content-center">
                    <div className={`${isInReadinList(item[Object.keys(item)[0]]) ? 'opacity-100 mt-0' : 'opacity-0 -mt-6'} text-green-500 absolute top-1 right-1 transition-all duration-500`}>
                        <CheckIcon />
                    </div>
                    <img 
                        src={item[Object.keys(item)[0]].cover}
                        alt={item[Object.keys(item)[0]].title}                        
                        className={`${isInReadinList(item[Object.keys(item)[0]]) ? 'opacity-30' : 'opacity-100'} hover:scale-110 transition duration-500 cursor-pointer rounded-lg object-cover h-72 shadow-2xl w-48 dark:shadow-slate-400 shadow-slate-800 peer/item`}
                        onClick={() => isInReadinList(item[Object.keys(item)[0]]) ? removeFromReadingList(item[Object.keys(item)[0]]) : addToReadingList(item[Object.keys(item)[0]])}
                        id={item[Object.keys(item)[0]].ISBN}                        
                    />
                    <span className={`${isInReadinList(item[Object.keys(item)[0]]) ? 'opacity-0 -mb-8' : 'peer-hover/item:opacity-100 peer-hover/item:mb-0'} block opacity-0 -mb-8 dark:text-gray-100 text-gray-900 absolute bottom-5 duration-500 w-full text-center transition-all bg-green-500 bg-opacity-80 rounded pt-1 pb-1`}> Agregar a la Lista</span>
                    <span className={`${isInReadinList(item[Object.keys(item)[0]]) ? 'peer-hover/item:opacity-100 peer-hover/item:mb-0' : 'opacity-0 -mb-8'} block opacity-0 -mb-8 dark:text-gray-100 text-gray-900 absolute bottom-5 duration-500 w-full text-center transition-all bg-red-500 bg-opacity-80 rounded pt-1 pb-1`}> Eliminar de la Lista</span>                    
                </li>
                )
            )}            
        </ul>      
    )
  }