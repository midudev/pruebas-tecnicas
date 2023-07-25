'use client'

import { useState , useEffect } from 'react';
import { Book } from "../interfaces/library.interface";

const list:Book[] = require('../JSON/library.json').library.map( (x:any) => x.book );
const genres:string[] = list.map(x => x.genre).filter( (item,index,array) => array.indexOf(item) === index ); genres.push('all');
    const minAndMaxOfPages:number[] = list
    .map(x => x.pages)
    .sort( (a,b) => a - b)
    //.filter( (item,index,array) => (index == 0 || index == array.length - 1) );

export interface userList {library:Book[],forReading:Book[]}
export interface genreAndPages {genre:string,pages:number}

const libraryHook = () => {

    const [ userList , setUserList ] = useState<userList>({library:list,forReading:[]});
    const [ genreAndPages , setGenreAndPages ] = useState<genreAndPages>({genre:'all',pages:minAndMaxOfPages[0]});

    useEffect(() => {
        setUserList(v => ({...v,library:listFiltered()}))
    },[genreAndPages,userList.forReading])

    const libraryHookCRUD = {
        setAndUnsetForReading:{
            setForReading:(bookName:string) => {},
            unsetForReading:(bookName:string) => {}
        }
    }

    const listFiltered = ():Book[] => list
        .filter( (x) => {
            if(userList.forReading.length == 0){ return true } 
            !userList.forReading.map(x => x.title).includes(x.title)
        })
        .filter( (x) => (genreAndPages.genre == 'all' || genreAndPages.genre == x.genre) )
        .filter( (x) => x.pages >= genreAndPages.pages )

    
    return({    userList , setGenreAndPages ,
                genres , minAndMaxOfPages   })

}

export default libraryHook ;