import { BookISBNType, type Book as BookType } from '../types';

interface Props extends BookType {
    handleOnClick:((id: BookISBNType) => void)
} 

export const Book: React.FC<Props> = ({ title,pages,genere,cover,synopsis,year,ISBN,author,handleOnClick }) => {
    return (
        <>
        <img onClick={()=>handleOnClick(ISBN)} className='w-full h-full object-cover' src={cover} alt="" />
        </>
    )
}