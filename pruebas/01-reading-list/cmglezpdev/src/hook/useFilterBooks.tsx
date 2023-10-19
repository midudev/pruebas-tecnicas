import { useState, useEffect } from 'react';
import { Book } from '../types';

export interface Filter {
    option: string;
    selected: boolean;
}


export const useFilterBooks = (opts: string[]) => {
    const [filterOptions, setFilterOptions] = useState<Filter[]>([]);

    useEffect(() => setOptions(opts), []);

    const toggleSelectOption = (option: string) => {
        setFilterOptions(
            filterOptions.map(opt => {
                if(opt.option !== option) return opt;
                return { ...opt, selected: !opt.selected };
            })
        );
    };

    const setOptions = (options: string[]) => {
        setFilterOptions(
            options.map(opt => ({ 
                option: opt, 
                selected: filterOptions.find(filter => filter.option === opt)?.selected || false 
            }))
        );
    };

    const filterBooks = (books: Book[]) => {
        const countSelected = filterOptions.reduce((count, filter) => count + Number(filter.selected), 0);
        if(countSelected === 0 || countSelected === books.length) return books;
        return books.filter(book => filterOptions.some(filter => {
          return filter.option === book.genre && filter.selected === true
        }));
      }

    return {
        filterOptions,
        toggleSelectOption,
        setOptions,
        filterBooks
    }
}
