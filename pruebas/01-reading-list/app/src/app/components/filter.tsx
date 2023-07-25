'use client'

import { useContext, useEffect, useState } from 'react';
import { userList } from '../hooks/library.hook';
import { sortAbc } from '../pages/library.pages';
import styles from '../styles/filter.module.css';
import { mainContext } from '../context/main.context';

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
                    .map( (x,i) => (<option key={i} value={x}>{(x == 'all') ? 'Todos' : x}</option>))}
            </select>
        </div>
    )

}

const Filter = () => {

    const { minAndMaxOfPages , userList , genres , setGenreAndPages } = useContext(mainContext) ;

    const [ rangeValue , setRangeValue ] = useState<number>(minAndMaxOfPages[0]);
    const [ genre , setGenre ] = useState<string>('all');

    useEffect(() => setGenreAndPages({genre,pages:rangeValue}),[rangeValue,genre])

    return(
        <div className={styles.filterComponent}>
            <CountFragment userList={userList}/>
            <RangeFragment range={rangeValue} setRange={setRangeValue} minAndMaxOfPages={minAndMaxOfPages}/>
            <GenresFragment genres={genres} value={genre} setValue={setGenre}/>
        </div>
    )

}

export default Filter