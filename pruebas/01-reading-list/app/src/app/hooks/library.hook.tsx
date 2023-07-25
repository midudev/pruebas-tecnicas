'use client'

import { useEffect , useState } from 'react';

import { Book } from "../interfaces/library.interface";

const libraryHook = () => {

    const list:Book[] = require('../JSON/library.json').library.map( (x:any) => x.book );
    const genres:string[] = list.map(x => x.genre).filter( (item,index,array) => array.indexOf(item) === index );
    const minAndMaxOfPages:number[] = list
    .map(x => x.pages)
    .sort( (a,b) => a - b)
    .filter( (item,index,array) => (index == 0 || index == array.length - 1) );

    const [ userList , setUserList ] = useState<{library:Book[],forReading:Book[]}>({library:list,forReading:[]});

    return({userList,setUserList})

}

export default libraryHook ;