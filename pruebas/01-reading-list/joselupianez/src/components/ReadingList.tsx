
import { BookItem, Book } from "../types"

interface ChildProps {
    toggleModal: (book: Book) => void;
    readingList: BookItem[]
}

export default function ReadingList({toggleModal, readingList} : ChildProps) {
    return (
        <section className="p-5 bg-neutral-900 lg:rounded-md w-full lg:w-1/3 lg:m-10 lg:ml-0">
            <h3 className='font-bold text-2xl mb-5 text-center'>Lista de lectura</h3>
            {readingList.length > 0 ? (
            <section className='flex flex-wrap -mx-2 -mb-6'>
                {readingList.map((item, index) => (
                    <section onClick={(e) => {e.stopPropagation(); toggleModal(item.book);}} key={index} className='w-1/3 xl:w-1/3 px-2 mb-6' data-testid="readinglist-item">
                        <img src={item.book.cover} alt={item.book.title} className='rounded-md shadow-sm shadow-neutral-950/50 cursor-pointer h-full'/>
                    </section>
                ))}
            </section>
            ): (
                null
            )}
        </section>
    )
}