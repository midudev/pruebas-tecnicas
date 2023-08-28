import { type Book } from '../types'

interface Props {
  children: React.ReactNode
  book: Book
}

export const BookLayout = ({ children, book }: Props) => {
  return (
    <div key={book.ISBN} className="relative max-w-[220px] my-0 p-2 rounded bg-white shadow">
      <img className="p-6 border-b-2 border-parragraph" src={book.cover} alt={book.title} />
      <div className="mt-4 px-2">
        <h2 className="font-bold text-lg">{book.title}</h2>
        <p className="mb-2 text-sm italic">{book.author.name}</p>
        {children}
      </div>
    </div>
  )
}
