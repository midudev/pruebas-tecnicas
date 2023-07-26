interface IYear {
    min: number;
    max: number;
}

export interface IHandleFilterCallbackProps {
    setFilterByPage: React.Dispatch<React.SetStateAction<number>>;
    setFilterByYear: React.Dispatch<React.SetStateAction<IYear>>;
    setFilterByGenre: React.Dispatch<React.SetStateAction<string>>;
} 


export interface IValues {
    pages: number;
    year: IYear;
    genre: string
}

export interface IInputValues {
    pages: number;
    year: IYear;
    genre: string[];
}

export interface IFiltersProps {
    handleFilters: (fn: (props: IHandleFilterCallbackProps) => void) => void;
    filterValues: IValues,
    filterInputValues: IInputValues,
} 