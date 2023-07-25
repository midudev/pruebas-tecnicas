interface CommonProps {
    title?: string;
    className?: string;
}

export interface RangeProps extends CommonProps {
    value: number;
    min: number;
    max: number;
    onClickCapture: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchProps extends CommonProps {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DropdownProps extends CommonProps {
    value: string;
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}