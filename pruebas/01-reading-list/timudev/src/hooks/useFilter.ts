import { useState } from 'react';

interface PropsFilter {
    genre?: string;
    pages?: number;
}

export const useFilter = ({genre = 'all', pages = 0}: PropsFilter) => {
  
    const [genreFilter, setGenreFilter] = useState(genre);
    const [pagesFilter, setPagesFilter] = useState(pages);

    const onSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreFilter(e.target.value);
        if ( e.target.value === 'all' ) {
            return;
        }
    }

    const onSelectPages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPagesFilter(Number(e.target.value));
        if ( Number(e.target.value) === 0 ) {
            return;
        }
    }

  return {
    genreFilter,
    pagesFilter,
    onSelectGenre,
    onSelectPages
  }
}
