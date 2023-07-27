import { useRef, useEffect } from "react"
import { Book, BookItem } from "../types"

interface ChildProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    removeOrAddToReadingList: (book: Book, add: boolean) => void;
    readingList: BookItem[];
    selectedBook: Book;
}

export default function Modal({modal, setModal, removeOrAddToReadingList, readingList, selectedBook}: ChildProps) {
    const bookInList = readingList.filter(item => item.book.title === selectedBook.title).length > 0
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if(!ref.current?.contains(e.target as Node)){
                setModal(false)
            }
        }
        document.body.addEventListener('click', handleOutsideClick)
        
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [modal, setModal])

    return (
        <section className={`fixed ${!modal ? 'hidden' : ''} inset-0 bg-neutral-900 bg-opacity-90 overflow-y-auto h-full w-full`} data-testid="modal">
            <section className="flex h-screen justify-center items-center">
                <section ref={ref} className="md:relative md:w-4/5 lg:w-1/2 h-fit rounded-md md:bg-neutral-900 md:border border-neutral-700 md:p-5">
                    <button onClick={() => setModal(false)} className="absolute right-0 top-0 m-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-neutral-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <section className="flex flex-col justify-center items-center p-5">
                        <img src={selectedBook.cover} alt={selectedBook.title} className='h-64 w-52 object-fit rounded-md mb-4'/>
                        <h3 className='font-bold pb-4 text-center text-xl'>{selectedBook.title}</h3>
                        <span className='uppercase text-xs opacity-70 font-bold'>{selectedBook.author.name}</span>
                        {selectedBook.author.otherBooks.length > 0 && (<span className="text-xs text-center">Otros libros: {selectedBook.author.otherBooks.join(", ")}</span>)}
                        <section className="flex flex-row gap-2 lg:gap-10 w-full m-5 justify-center text-center">
                            <section className="flex flex-col w-full md:w-1/3 uppercase border border-neutral-700 rounded-md">
                                <span className="text-sm h-1/2 p-3 flex items-center justify-center">Páginas</span>
                                <span className="text-sm h-1/2 font-bold p-3 bg-neutral-800 rounded-b-md flex items-center justify-center">{selectedBook.pages}</span>
                            </section>
                            <section className="flex flex-col w-full md:w-1/3 uppercase border border-neutral-700 rounded-md">
                                <span className="text-sm h-1/2 p-3 flex items-center justify-center">Género</span>
                                <span className="text-sm h-1/2 font-bold p-3 bg-neutral-800 rounded-b-md flex items-center justify-center">{selectedBook.genre}</span>
                            </section>
                            <section className="flex flex-col w-full md:w-1/3 uppercase border border-neutral-700 rounded-md">
                                <span className="text-sm h-1/2 p-3 flex items-center justify-center">Año</span>
                                <span className="text-sm h-1/2 font-bold p-3 bg-neutral-800 rounded-b-md flex items-center justify-center">{selectedBook.year}</span>
                            </section>
                        </section>
                        <h3 className='font-bold pb-4 text-xl'>Sinopsis</h3>
                        <p className="pb-10 text-center">{selectedBook.synopsis}</p>
                        {bookInList ? (
                            <button onClick={() => removeOrAddToReadingList(selectedBook, false)} className="bg-red-700 hover:bg-red-600 transition w-full lg:w-1/2 rounded-md p-2 font-bold" data-testid="removebook">Remover de lista de lectura</button>
                        ) : (
                            <button onClick={() => removeOrAddToReadingList(selectedBook, true)} data-testid="addbook" className="bg-blue-700 hover:bg-blue-600 w-full lg:w-1/2 rounded-md p-2 font-bold">Agregar a lista de lectura</button>
                        )}
                    </section>
                </section>
            </section>
        </section>
    )
}