import { Book, BookItem } from "../types"

interface ChildProps {
    removeOrAddToReadingList: (book: Book, add: boolean) => void;
    readingList: BookItem[];
    selectedBook: Book;
}

export default function Modal({removeOrAddToReadingList, readingList, selectedBook}: ChildProps) {
    const bookInList = readingList.filter(item => item.book.title === selectedBook.title).length > 0
    
    return (
        <>
            <section className="flex h-screen justify-center items-center">
                <section className="lg:w-1/2 lg:h-3/4 rounded">
                    <section className="flex flex-col justify-center items-center p-5">
                        <img src={selectedBook.cover} alt={selectedBook.title} className='h-64 w-52 object-fit rounded-md mb-4'/>
                        <h3 className='font-bold pb-4 text-center text-xl'>{selectedBook.title}</h3>
                        <span className='uppercase text-xs opacity-70 font-bold'>{selectedBook.author.name}</span>
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
                        <h3 className='font-bold pb-4 text-left text-xl'>Sinopsis</h3>
                        <p className="pb-10">{selectedBook.synopsis}</p>
                        {bookInList ? (
                            <button onClick={() => removeOrAddToReadingList(selectedBook, false)} className="bg-red-700 hover:bg-red-600 transition w-full lg:w-1/2 rounded-md p-2 font-bold" data-testid="removebook">Remover de lista de lectura</button>
                        ) : (
                            <button onClick={() => removeOrAddToReadingList(selectedBook, true)} data-testid="addbook" className="bg-blue-700 hover:bg-blue-600 w-full lg:w-1/2 rounded-md p-2 font-bold">Agregar a lista de lectura</button>
                        )}
                    </section>
                </section>
            </section>
        </>

    )
}