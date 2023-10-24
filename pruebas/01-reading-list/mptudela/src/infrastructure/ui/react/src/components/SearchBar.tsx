import { RxMagnifyingGlass } from 'react-icons/rx';
import { useGlobalContext } from '@/hooks/useGlobalContext';

export const SearchBar = () => {
    const searchParams = useGlobalContext(store => store.searchParams);
    const setSearchParams = useGlobalContext(store => store.setSearchParams);

    const handleChange = (event: any) => {
        searchParams.title = event.target.value;
        setSearchParams(searchParams);
    };

    return (
        <div className='form-control w-full max-w-lg'>
            <div className='relative'>
                <RxMagnifyingGlass className='pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 ' />
                <input
                    name='search'
                    type='search'
                    className='input input-bordered input-md w-full max-w-lg pl-14 '
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
