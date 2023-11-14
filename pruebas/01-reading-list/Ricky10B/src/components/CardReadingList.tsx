import { Book } from "../interfaces/interfacesComponents";

interface ICardReadingListProps {
  book: Book
  removeBookOfList: () => void
}

export function CardReadingList ({ book, removeBookOfList }: ICardReadingListProps) {
  return (
    <li className="bg-[#1f2937] w-[170px] h-[275px] rounded-md flex flex-col shadow-2xl">
      <picture className="w-full h-full">
        <img
          src={book.cover}
          className="w-full h-full block object-cover aspect-square rounded-tl-md"
          alt={`portada del libro ${book.title}`}
        />
      </picture>
      <button
        className="bg-red-600 py-2 rounded-b-md font-medium hover:bg-red-700"
        onClick={removeBookOfList}
      >
        Sacar de la lista
      </button>
    </li>
  )
}
