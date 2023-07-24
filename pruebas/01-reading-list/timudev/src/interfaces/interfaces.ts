import { ReactElement } from 'react';
import { Props as BookButtonsProps} from '../components/BookButtons';
import { Props as BookCardProps} from '../components/BookCard';
import { Props as BookImageProps} from '../components/BookImage';
import { Props as BookTitleProps} from '../components/BookTitle';

// Book interface

export interface Book {
    title:    string;
    pages:    number;
    genre:    string;
    cover:    string;
    synopsis: string;
    year:     number;
    ISBN:     string;
    author:   Author;
}

export interface Author {
    name:       string;
    otherBooks: string[];
}

export interface BookContextProps {
    book: Book;
    readingList: boolean;
    addToReadingList: ( value: boolean ) => void;
}

export interface BookCardHOCProps {
    ({ children, book }: BookCardProps): ReactElement,
    Buttons: (Props: BookButtonsProps) => ReactElement,
    Image: (Props: BookImageProps) => ReactElement,
    Title: (Props: BookTitleProps) => ReactElement,
}

export interface onChangeStoreArgs {
    readingList: boolean;
    book: Book;
}

export interface BookInReadingList extends Book {
    readingList: boolean;
}

export interface StorageEvent extends Event {
    readonly key: string | null;
    readonly newValue: string | null;
    readonly oldValue: string | null;
    readonly storageArea: Storage | null;
    readonly url: string;
}



