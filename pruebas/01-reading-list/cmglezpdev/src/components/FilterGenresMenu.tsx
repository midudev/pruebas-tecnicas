import { FC } from 'react';
import { Book } from '../types';
import { Filter } from '../hook'; 

interface Props {
    books: Book[];
    filters: Filter[];
    toggleSelect: (genre: string) => void;
    open: boolean;

}

export const FilterGenresMenu:FC<Props> = ({ open, books, filters, toggleSelect}) => {
    
    const countGenre = (genre: string): number => {
        return books.reduce((c, g) => c + Number(g.genre === genre), 0);
    }

    return (
        <section style={{ display: open ? 'flex': 'none' }} className='main__menu'>
            <div className='filter__title'>
                <span>Filter by:</span>
            </div>

            {
            filters.map(({ option: genre, selected }) => (
                    <div 
                        key={genre} 
                        className={`option_filter ${selected && 'option-selected'}`} 
                        onClick={() => toggleSelect(genre)}
                    >
                            <span>{ `${genre} (${countGenre(genre)})` }</span>
                    </div>
                ))
            }
        </section>
    )
}
