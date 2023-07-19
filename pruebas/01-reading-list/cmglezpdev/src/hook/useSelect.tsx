import { useState, useEffect } from 'react';

interface Filter {
    option: string;
    selected: boolean;
}


export const useSelect = (opts: string[]) => {
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
        setFilterOptions(options.map(opt => ({ option: opt, selected: false })));
    };

    return {
        filterOptions,
        toggleSelectOption,
        setOptions,
    }
}
