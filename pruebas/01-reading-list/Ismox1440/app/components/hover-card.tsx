import { Book } from "@/models/book";

const HoverCardBook = ({ book }: { book: Book }) => {
  return (
    <div className="flex flex-col gap-1 rounded w-[500px] min-h-[100px] p-2">
      <h4 className="text-xl font-bold">{book.title}</h4>
      <div className="text-gray-700">
        <p className="text-sm ">{book.pages} Paginas</p>
        <p className="my-4">{book.synopsis}</p>
        <p>Genero: {book.genre}</p>
        <p>Author: {book.author.name}</p>
        <p>Paginas: {book.pages}</p>
      </div>
    </div>
  );
};

export default HoverCardBook;
