import { type Book as BookType } from '../types';

type Props = BookType;

export const Book: React.FC<Props> = ({ title,pages,genere,cover,synopsis,year,ISBN,author }) => {
    return (
        <>
        <img className='w-full h-full object-cover' src={cover} alt="" />
        </>
    )
}