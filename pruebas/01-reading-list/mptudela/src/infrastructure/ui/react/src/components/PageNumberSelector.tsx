import { useState, ChangeEvent } from 'react';
import { useGlobalContext } from '@/hooks/useGlobalContext';

type Props = {
    maxInitialValue: number;
};

export const PageNumberSelector = ({ maxInitialValue }: Props) => {
    const [value, setValue] = useState(maxInitialValue);
    const searchParams = useGlobalContext(store => store.searchParams);
    const setSearchParams = useGlobalContext(store => store.setSearchParams);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.valueAsNumber);
        setSearchParams({ ...searchParams, maxPages: event.target.valueAsNumber });
    };

    return (
        <div className='flex items-center gap-4 w-80'>
            <label htmlFor='steps-range' className='text-sm block whitespace-nowrap'>
                Páginas máximas: {value}
            </label>
            <input
                id='steps-range'
                type='range'
                min={100}
                max={maxInitialValue}
                value={value}
                step='100'
                onChange={handleChange}
                className='range range-xs range-accent w-56'
            />
        </div>
    );
};
