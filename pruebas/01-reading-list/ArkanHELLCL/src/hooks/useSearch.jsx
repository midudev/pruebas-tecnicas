import { useEffect, useRef } from 'react';

export function useSearch({error, search}, setFilters) {    
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }
        if(search === ''){
            setFilters(prevState => ({
                ...prevState, 
                error: 'No se puede buscar un item vacio'
            }))
            return
        }        

        setFilters(prevState => ({
            ...prevState, 
            error: null,
            page: 1
        })) 
        

    },[search])

    return { search, error}
}