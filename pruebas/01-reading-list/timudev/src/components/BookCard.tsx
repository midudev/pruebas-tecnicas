import { createContext, ReactElement, CSSProperties } from 'react';

import { useBook } from '../hooks/useBook';
import { BookContextProps, Book, onChangeStoreArgs } from '../interfaces/interfaces';

export const BookContext = createContext({} as BookContextProps);
const { Provider } = BookContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    book: Book;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeStoreArgs ) => void;
    value?: boolean;
}

export const BookCard = ({ children, book, className, style, onChange, value }: Props) => {

    const { readingList, readingListChange } = useBook({ onChange, book, value });

    return (
        <Provider value={{
            book,
            readingList,
            addToReadingList: readingListChange,
        }}>
            <div
                data-testid={ `${ !readingList ? 'book-card' : '' }`  }
                className={ `${ className ? className : '' }`  }
                style={ style } 
            >
                { children }
            </div>
        </Provider>
    )
}
