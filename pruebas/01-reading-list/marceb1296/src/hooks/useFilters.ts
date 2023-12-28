import React, { useState, useCallback, useMemo } from "react";
import { IBooks, IHandleFilterCallbackProps, IValues, IInputValues} from "../interfaces";


const initialStateYear = {
    min: 0,
    max: 0
}

const initialStateSelect: string = "Todos";

type TUseFilterProps = IBooks[] | undefined

export const useFilters = (books: TUseFilterProps) => {
    
    /**
     * Todo
     * add missing filters: author
     */
    
    
    // States
    const [filterByYear, setFilterByYear] = useState(initialStateYear);
    const [filterByPage, setFilterByPage] = useState<number>(0);
    const [filterByGenre, setFilterByGenre] = useState<string>(initialStateSelect);
   
    const handleFilterChange = useCallback((fn: (props: IHandleFilterCallbackProps) => void) => fn({setFilterByPage, setFilterByYear, setFilterByGenre}), [])
    
    
    // Filters
    
    const filterGenre = useMemo(() => {
        if (!books) return []
        if (filterByGenre === initialStateSelect) return books
        
        return books.filter(({book}) => book.genre === filterByGenre)
        
    }, [books, filterByGenre])
    
    const filterYear = useMemo(() => {
        if (!filterByYear) return []
        
        let value: IBooks[] = []
        if (filterByYear.min > 0) {
            value = filterGenre.filter(({book}) => book.year >= filterByYear.min)
        }
        if (filterByYear.max > 0) {
            value = value.length > 0 ? value.filter(({book}) => book.year <= filterByYear.max) : filterGenre.filter(({book}) => book.year <= filterByYear.max)
        }
        
        return value.length > 0 ? value : filterGenre
    }, [filterGenre])
    
    const filterResult = useMemo(() => {
        if (!books) return []
        return filterByPage > 0
            ? filterYear.filter(({book}) => book.pages <= filterByPage)
            : filterYear
    }, [filterByPage, filterYear])
    
    const filterValues: IValues = {
        pages: filterByPage,
        year: filterByYear,
        genre: filterByGenre
    }
    
    const filterInputValues = useMemo(() => {
        let values: IInputValues = {
            pages: 0,
            year: {
                min: 0,
                max: 0
            },
            genre: [initialStateSelect]
        }
        
        if (!books) return values
        
        books.forEach(({book}) => {
            if (book.pages > values.pages) {
                values = {
                    ...values,
                    ["pages"]: book.pages
                }
            }
            
            if (values.year.min === 0) {
                values = {
                    ...values,
                    ["year"]: {
                        ...values.year,
                        min: book.year
                    }
                }
            } else if (book.year < values.year.min) {
                values = {
                    ...values,
                    ["year"]: {
                        ...values.year,
                        min: book.year
                    }
                }
            } else if (book.year > values.year.max) {
                values = {
                    ...values,
                    ["year"]: {
                        ...values.year,
                        max: book.year
                    }
                }
            }
            
            if (!values.genre.includes(book.genre)) {
                values = {
                    ...values,
                    ["genre"]: [
                        ...values.genre,
                        book.genre
                    ]
                }
            }
        })
        
        return values
        
    }, [books])
    
    
    return {
        filterResult,
        filterValues,
        filterInputValues,
        handleFilterChange
    }
}