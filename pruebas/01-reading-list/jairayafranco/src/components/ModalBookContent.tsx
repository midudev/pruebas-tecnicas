import { useBookStore } from "../store/useBookStore";

export default function ModalBookContent() {
    const { modalBook: book } = useBookStore();

    return (
        <dialog id="my_modal" className="modal">
            <form method="dialog" className="modal-box">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <img className="w-44 h-64" src={book?.cover} />
                    <div>
                        <h1 className="text-2xl font-bold">{book?.title}</h1>
                        <p>
                            <span className="text-md font-bold">Autor: </span>
                            <span className="text-sm">{book?.author.name}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">Otros libros: </span>
                            <span className="text-sm">{book?.author.otherBooks.join(', ')}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">Genero: </span>
                            <span className="text-sm">{book?.genre}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">Año: </span>
                            <span className="text-sm">{book?.year}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">ISBN: </span>
                            <span className="text-sm">{book?.ISBN}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">Descripción: </span>
                            <span className="text-sm">{book?.synopsis}</span>
                        </p>
                        <p>
                            <span className="text-md font-bold">Paginas: </span>
                            <span className="text-sm">{book?.pages}</span>
                        </p>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
