import { Book, Library } from "../types"

interface ChildProps {
    toggleModal: (book: Book) => void;
    library: Library;
}

export default function BookList({ toggleModal, library }: ChildProps) {
    function shortenText(title: string){
        return title.length > 30 ? title.slice(0, 30) + '...' : title
    }

    return (
        <>
            <section className='flex flex-wrap -mx-5 -mb-6'>
                {library.library.map((item, index) => (
                    <section key={index} data-testid="booklist-item" className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-5 mb-6">
                        <section className="flex flex-col justify-center items-center text-center">
                            <img onClick={(e) => {e.stopPropagation(); toggleModal(item.book);}} src={item.book.cover} alt={item.book.title} className='cursor-pointer h-64 w-48 object-fit rounded-md mb-2 shadow-lg shadow-neutral-800'/>
                            <span className='uppercase text-xs opacity-70 font-bold'>{item.book.genre}</span>
                            <h3 onClick={(e) => {e.stopPropagation(); toggleModal(item.book);}} className='cursor-pointer font-bold'>{shortenText(item.book.title)}</h3>
                        </section>
                    </section>
                ))}
            </section>
        </>
    )
}