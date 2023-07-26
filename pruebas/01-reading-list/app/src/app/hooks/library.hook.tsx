'use client'

import { useState , useEffect } from 'react';
import { Book } from "../interfaces/library.interface";

const list:Book[] = require('../JSON/library.json').library.map( (x:any) => x.book );
const genres:string[] = list.map(x => x.genre).filter( (item,index,array) => array.indexOf(item) === index ); genres.push('all');
const minAndMaxOfPages:number[] = list
.map(x => x.pages)
.sort( (a,b) => a - b)
//.filter( (item,index,array) => (index == 0 || index == array.length - 1) );

const getBookByName = (name:string) => list.filter(x => x.title == name)[0];

export interface userList {library:Book[],forReading:Book[]}
export interface genreAndPages {genre:string,pages:number}
export interface libraryHookCRUD {
    setAndUnsetForReading:{
        setForReading:(bookName:string) => void,
        unsetForReading:(bookName:string) => void,
    }
}

const libraryHook = () => {

    const [ userList , setUserList ] = useState<userList>({library:list,forReading:[]});
    const [ genreAndPages , setGenreAndPages ] = useState<genreAndPages>({genre:'all',pages:minAndMaxOfPages[0]});

    useEffect(() => {
        
        //guardar en store:
        const newStateInStore = {userList,genreAndPages};
        localStorage.setItem('state',JSON.stringify(newStateInStore));

        setUserList(v => ({...v,library:listFiltered()}));

        //cargar de store:
        const callback = () => {
            const store = JSON.parse(localStorage.getItem('state') as string) as {userList:userList,genreAndPages:genreAndPages};
            setUserList(v => store.userList) ; setGenreAndPages(v => store.genreAndPages);
        } ;
        window.addEventListener('storage',callback) ;
        return () => window.removeEventListener('storage',callback) ;

    },[genreAndPages,userList.forReading])

    const libraryHookCRUD = {
        setAndUnsetForReading:{
            setForReading:(bookName:string) => setUserList(v => ({...v,forReading:[...v.forReading,getBookByName(bookName)]})),
            unsetForReading:(bookName:string) => setUserList(v => ({...v,forReading:v.forReading.filter(x => x.title !== bookName)}))
        }
    }

    const listFiltered = ():Book[] => list
        .filter( (x) => {
            if(userList.forReading.length == 0){ return true }
            return !userList.forReading.map(x => x.title).includes(x.title)
        })
        .filter( (x) => (genreAndPages.genre == 'all' || genreAndPages.genre == x.genre) )
        .filter( (x) => x.pages >= genreAndPages.pages )

    
    return({    userList , setGenreAndPages ,
                genres , minAndMaxOfPages,
                libraryHookCRUD })

}

export default libraryHook ;