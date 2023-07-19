import { FC, useState, useEffect } from 'react';
import { useSelect } from '../hook';
import { Book } from '../types';

interface Props {
    books: Book[];
}

export const Menu:FC<Props> = ({ books }) => {
    const [genres, setGenres] = useState<string[]>([]);
    const { filterOptions, toggleSelectOption, setOptions } = useSelect([]);

    useEffect(() => {
        const allGenres: string[] = 
            [...new Set(books.map(book => book.genre))]
            .sort((a, b) => a.localeCompare(b));
        setGenres(allGenres);
    }, [books]);

    useEffect(() => {
        setOptions(genres);
    }, [genres]);

    const countGenre = (genre: string): number => {
        return books.reduce((c, g) => c + Number(g.genre === genre), 0);
    }

    return (
            <section className='main__menu'>
                <div className='filter__title'>
                    <span>Filter by:</span>
                </div>

                {
                    filterOptions.map(({ option: genre, selected }) => (
                        <div 
                            key={genre} 
                            className='option_filter' 
                            onClick={() => toggleSelectOption(genre)}
                            style={{backgroundColor: selected ? '#5eacf5' : '#a2cff8'}}
                        >
                                <span>{ `${genre} (${countGenre(genre)})` }</span>
                        </div>
                    ))
                }
            </section>
    )
}
