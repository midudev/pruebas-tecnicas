'use client'

import React, { ReactNode, createContext } from "react"
import libraryHook, { genreAndPages, userList } from "../hooks/library.hook"

interface libraryHookReturn { userList:userList , genres:string[] , minAndMaxOfPages:number[] , setGenreAndPages:(arg:genreAndPages) => void }
interface mainContextProps extends libraryHookReturn {}
const mainContext = createContext( {} as mainContextProps );
const MainProvider = ({children}:{children:ReactNode}) => {

    return(
    <mainContext.Provider value={{...libraryHook()}}>
        {children}
    </mainContext.Provider>
    )

}

export { mainContext , MainProvider } 