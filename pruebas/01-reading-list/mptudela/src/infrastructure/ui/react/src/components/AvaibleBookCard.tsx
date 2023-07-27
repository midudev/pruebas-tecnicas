import { Book } from '@/domain/models/Book';
import { BiBookmarkAltPlus } from 'react-icons/bi';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    book: Book;
};

export const AvaibleBookCard = ({ book }: Props) => {
    const notify = () =>
        toast.success(`El libro "${book.title}" se ha añadido a tu lista de lectura`, {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored'
        });
    const handleClick = useGlobalContext(store => store.addBookToRead);
    return (
        <div className='rounded overflow-hidden shadow-lg h-full w-96 md:w-full max-w-2xl bg-base-300'>
            <div className='relative flex w-full h-full'>
                <img
                    className='h-full w-96 md:w-64 object-cover hover:cursor-pointer md:hover:cursor-auto'
                    src={book.cover}
                    loading='lazy'
                    alt='Book Cover'
                ></img>
                <div className='hidden flex-1 p-6 md:block'>
                    <div className='flex flex-col h-full gap-6'>
                        <h3 className='font-bold text-2xl mb-4 text-accent-content'>{book.title}</h3>
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold'>Sinopsis: </span>
                            <p className='text-base-content text-base'> {book.synopsis}</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='font-bold'>Autor: </span>
                            <p className='text-base-content text-base'> {book.author?.name}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-bold'>Género: </span>
                            <div className='badge badge-neutral badge-lg'>{book.genre}</div>
                        </div>
                        <div className='flex justify-end items-end h-full'>
                            <button
                                className='btn btn-accent btn-lg btn-circle'
                                onClick={() => {
                                    handleClick(book);
                                    notify();
                                }}
                            >
                                <BiBookmarkAltPlus className='h-6 w-6 fill-black ' />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='absolute z-10 block w-96 h-full hover:cursor-pointer md:hidden'
                    onClick={() => {
                        handleClick(book);
                        notify();
                    }}
                />
            </div>
        </div>
    );
};
