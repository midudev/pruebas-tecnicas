'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";

export default function GenreButton() {
    const { setFilter } = useLibrary()    
    
    const handleOnClick = (event) => setFilter(event.target.id)
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <form action="">
            <input type="button" name="genre" id="All" onClick={handleOnClick} value="All" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Fantasía" onClick={handleOnClick} value="Fantasy" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Ciencia ficción" onClick={handleOnClick} value="Sci-Fi" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Zombies" onClick={handleOnClick} value="Zombies" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Terror" onClick={handleOnClick} value="Horror" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/> 
            <input type="button" name="genre" id="Romance" onClick={handleOnClick} value="Romance" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Ciencia" onClick={handleOnClick} value="Science" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Salud" onClick={handleOnClick} value="Health" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
            <input type="button" name="genre" id="Psicología" onClick={handleOnClick} value="Psicology" className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] bg-white border-bgwarn shadow-md"/>
        </form>
    )
}
  