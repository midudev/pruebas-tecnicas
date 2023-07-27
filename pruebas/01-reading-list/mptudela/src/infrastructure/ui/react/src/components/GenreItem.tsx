import { useState, useRef } from 'react';
import { useGlobalContext } from '@/hooks/useGlobalContext';

type Props = {
    genre: string;
};

export const GenreItem = ({ genre }: Props) => {
    const searchParams = useGlobalContext(store => store.searchParams);
    const setSearchParams = useGlobalContext(store => store.setSearchParams);
    const [active, setActive] = useState(false);
    const button = useRef<HTMLButtonElement>(null);

    const handleOnClick = () => {
        if (active) {
            const selectedGenres = searchParams.genres.filter(item => item !== genre);
            setSearchParams({ ...searchParams, genres: selectedGenres });
            setActive(false);
            button.current?.classList.remove('btn-success');
            button.current?.classList.add('btn-outline');
        } else if (!active) {
            setSearchParams({ ...searchParams, genres: [...searchParams.genres, genre] });
            setActive(true);
            button.current?.classList.add('btn-success');
            button.current?.classList.remove('btn-outline');
        }
    };

    return (
        <button className='btn btn-outline' ref={button} onClick={handleOnClick}>
            {genre}
        </button>
    );
};
