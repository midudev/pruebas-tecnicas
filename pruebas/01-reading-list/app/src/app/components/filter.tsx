'use client'

import { useEffect, useState } from 'react';
import { userList } from '../hooks/library.hook';
import { libraryProps, sortAbc } from '../pages/library.pages';
import styles from '../styles/filter.module.css';

const CountFragment = ({userList}:{userList:userList}) => 
    <div className={styles.countFragment}>
        <p> libros disponibles : {userList.library.length}</p>
        { (userList.forReading.length !== 0) && <p>{userList.forReading.length} libros pendientes de leer</p> }
    </div>

interface RangeFragmentProps {range:number,minAndMaxOfPages:number[],setRange:(value:number) => void}
const RangeFragment = ({range,setRange,minAndMaxOfPages}:RangeFragmentProps) => {

    return(
        <div className={styles.rangeComponent}>
            <label htmlFor="customRange" className="form-label">Número de páginas máximo : {range}</label>
            <input  type="range" className={`form-range`} value={range} id="customRange" onChange={(e) => setRange(parseInt(e.target.value))}
                    min={minAndMaxOfPages[0]} max={minAndMaxOfPages[minAndMaxOfPages.length - 1]}
            ></input>
        </div>
    )

}

interface genresProps {genres:string[],value:string,setValue:(value:string) => void}
const GenresFragment = ({genres,value,setValue}:genresProps) => {

    return(
        <div className={styles.rangeComponent}>
            <label htmlFor="customSelect"></label>
            <select className='form-select' id='customSelect' value={value} onChange={(e) => setValue(e.target.value)}>
                {genres
                    .sort( (a,b) => (a == 'all') ? 1 : -1)
                    .sort( (a,b) => sortAbc(a,b))
                    .map( (x,i) => (<option>{(x == 'all') ? 'Todos' : x}</option>))}
            </select>
        </div>
    )

}

const Filter = ({userList,genres,minAndMaxOfPages}:libraryProps) => {

    const [ rangeValue , setRangeValue ] = useState<number>(minAndMaxOfPages[minAndMaxOfPages.length - 1]);
    const [ genre , setGenre ] = useState<string>('all');

    return(
        <div className={styles.filterComponent}>
            <CountFragment userList={userList}/>
            <RangeFragment range={rangeValue} setRange={setRangeValue} minAndMaxOfPages={minAndMaxOfPages}/>
            <GenresFragment genres={genres} value={genre} setValue={setGenre}/>
        </div>
    )

}

export default Filter