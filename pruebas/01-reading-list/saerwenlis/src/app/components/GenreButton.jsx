'use client'
import { useEffect, useState } from "react";
import { useLibrary } from "../store/useLibrary";

export default function GenreButton() {
    const { setFilter } = useLibrary()    
    const [currentInput, setCurrentInput] = useState('');

    const handleOnClick = (event) => {
        setFilter(event.target.id)
        event.preventDefault();
        setCurrentInput(event.target.value);
    }

    useEffect(() => {
        changeColor(currentInput);
      }, [currentInput]);

    const changeColor = (current) => {
        const inputElem = document.querySelectorAll("input[name='genre']");
    
        inputElem.forEach((elem) => {
          if (elem.value === current) {
            elem.style.backgroundColor = '#E75C62';
            elem.style.color = '#fff';
          } else {
            elem.style.backgroundColor = '#fffcfa';
            elem.style.color = '#000';
          }
        });
    };
    
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <form action="" className="flex justify-center items-center" >
            <p className="mr-1 text-xs text-black font-bold">Discover:</p>
            <input 
            key='All' 
            type="button" 
            name="genre" 
            id="All" 
            onClick={handleOnClick} 
            value="All" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Fantasía' 
            type="button" 
            name="genre" 
            id="Fantasía" 
            onClick={handleOnClick} 
            value="Fantasy" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Ciencia ficción' 
            type="button" 
            name="genre" 
            id="Ciencia ficción" 
            onClick={handleOnClick} 
            value="Sci-Fi" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Zombies' 
            type="button" 
            name="genre" 
            id="Zombies" 
            onClick={handleOnClick} 
            value="Zombies" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Terror' 
            type="button" 
            name="genre" 
            id="Terror" 
            onClick={handleOnClick} 
            value="Horror" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/> 
            <input 
            key='Romance' 
            type="button" 
            name="genre" 
            id="Romance" 
            onClick={handleOnClick} 
            value="Romance" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Ciencia' 
            type="button" 
            name="genre" 
            id="Ciencia" 
            onClick={handleOnClick} 
            value="Science" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Salud' 
            type="button" 
            name="genre" 
            id="Salud" 
            onClick={handleOnClick} 
            value="Health" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
            <input 
            key='Psicología' 
            type="button" 
            name="genre" 
            id="Psicología" 
            onClick={handleOnClick} 
            value="Psicology" 
            className="cursor-pointer mx-2 font-semibold text-xs px-2 py-1 rounded-lg border-[0.8px] border-bgwarn shadow-md"/>
        </form>
    )
}
  