import { BookISBNType, type Book as BookType } from '../types';

interface Props extends BookType {
    handleOnClick: ((id: BookISBNType) => void),
    isAvailable?: boolean,
    isReading?: boolean
}

export const Book: React.FC<Props> = ({ title, pages, genere, cover, synopsis, year, ISBN, author, handleOnClick, isAvailable=false, isReading=false }) => {
    return (
        <div className='relative group'>
            {isReading && <button className='opacity-0 absolute top-0 right-0 px-3 py-2 bg-slate-800 group-hover:opacity-100 transition-opacity text-white' onClick={() => handleOnClick(ISBN)} >X</button>}
            {isAvailable && <button className='opacity-0 absolute top-1/2 right-1/2 translate-y-[-50%] translate-x-1/2 px-3 py-2 bg-slate-800 group-hover:opacity-100 transition-opacity text-white' onClick={() => handleOnClick(ISBN)} >Add</button>}
            <img className='w-full h-full object-cover' src={cover} alt="" />
        </div>
    )
}