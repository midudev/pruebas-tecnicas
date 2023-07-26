'use client'

import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { userList } from '../hooks/library.hook';
import { sortAbc } from '../pages/library.pages';
import styles from '../styles/filter.module.css';
import { mainContext } from '../context/main.context';

const CountFragment = ({userList}:{userList:userList}) => 
    <div className={styles.countFragment}>
        <p>{`${userList.library.length} : Libros disponibles .`}</p>
        <p
            style={{opacity:`${(userList.forReading.length == 0) ? 0 : 1}`}}
        >{`${userList.forReading.length} : Libros pendientes de leer .`}</p>
    </div>

interface RangeFragmentProps {range:number,minAndMaxOfPages:number[],setRange:(value:number) => void}
const RangeFragment = ({range,setRange,minAndMaxOfPages}:RangeFragmentProps) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [ left , setLeft ] = useState<number>(0) ;

    const onChangeCallback = (value:number) => {
        setRange(value) ; setLeft( ( range / minAndMaxOfPages[minAndMaxOfPages.length - 1] ) * 80)
    }

    return(
        <div className={styles.rangeComponent}>
            <label htmlFor="customRange" >Número de páginas máximo :</label>
            <input  type="range" ref={inputRef} className={`form-range`} value={range} id="customRange" 
                    onChange={(e) => onChangeCallback(parseInt(e.target.value))}
                    min={minAndMaxOfPages[0]} max={minAndMaxOfPages[minAndMaxOfPages.length - 1]}
            ></input>
            <p style={{left:`${left}%`}} className={styles.range}>{range}</p>
        </div>
    )

}

interface genresProps {genres:string[],value:string,setValue:(value:string) => void}
const GenresFragment = ({genres,value,setValue}:genresProps) => {

    return(
        <div className={styles.rangeComponent}>
            <label htmlFor="customSelect">Género :</label>
            <select id='customSelect' value={value} onChange={(e) => setValue(e.target.value)}>
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
            <div className={styles.filterBox}>
                <RangeFragment range={rangeValue} setRange={setRangeValue} minAndMaxOfPages={minAndMaxOfPages}/>
                <GenresFragment genres={genres} value={genre} setValue={setGenre}/>
            </div>
        </div>
    )

}

export default Filter