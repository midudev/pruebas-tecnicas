import { useId } from "react";
import { useReadingList } from "../hooks/useReadingList"
import { ReadingBookIcon, ClearReadingListIcon, DelIcon } from "./icons.jsx";

function storageEvent(renderReadingList){
    window.addEventListener('storage', (event) => {
        if (event.key === 'readingList') {            
            return renderReadingList(JSON.parse(event.newValue))
        }
    })
}

export function ReadingList() {
    const realingListChkboxId = useId();    
    const { removeFromReadingList, clearReadingList, renderReadingList, readingList } = useReadingList()

    storageEvent(renderReadingList)
        
    return (
        <>
            <label className="text-white bg-cyan-500 block w-8 h-8 justify-center transition-all cursor-pointer fixed top-20 right-6 py-1 px-1 rounded-full hover:scale-125 z-20" htmlFor={realingListChkboxId}>
                <ReadingBookIcon />
                <div className={`${readingList.length ? 'inline-flex' : 'hidden'} absolute items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900`}>{readingList.length}</div>
            </label>
            <input id={realingListChkboxId} type="checkbox" className="hidden peer/listReading" />
            <aside className="block top-32 w-52 -mr-44 p-8 pl-2 h-full fixed right-0 peer-checked/listReading:mr-0 peer-checked/listReading:p-8 dark:bg-gray-700 bg-gray-300 transition-all text-center dark:bg-opacity-90 bg-opacity-90 hover:mr-0 hover:p-8 z-10 overflow-auto rounded-lg shadow-lg">
                <ul>                    
                    {readingList.map((item) => (
                        <li key={item.ISBN} className="first:m-auto -mt-36">
                            <button className="hover:scale-125 absolute right-8 transition-all text-red-600 p-1" onClick={() => removeFromReadingList(item)}>
                                <DelIcon />
                            </button>
                            <img
                                className="w-36 h-52 rounded-lg"
                                src={item.cover}
                                alt={item.title}
                            />
                        </li>
                    ))}

                </ul>
                <button className={`${readingList.length ? 'inline-flex' : 'hidden'} text-red-500 hover:scale-125 pt-5 transition-all`} onClick={() => clearReadingList()}>
                    <ClearReadingListIcon />
                </button>
                <span className={`${readingList.length ? 'hidden' : 'block'} text-center dark:text-gray-100 text-gray-900 hover:scale-125 pt-5 transition-all`}>Lista Vacia</span>
            </aside>
        </>
    )
}