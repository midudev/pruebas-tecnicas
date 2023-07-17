export default function BookCard ({ book, addToReadingList }) {
  return (
    <li className='text-center text-slate-300 flex flex-col items-center p-2 cursor-pointer animate-fade animate-ease-in animate-normal' onClick={() => addToReadingList(book)}>
        <img src={book.cover} alt={`${book.title} image`} className="w-1/5" />
        <h3>{book.title}</h3>
        <p>{book.genre}</p>
     </li>
  )
}
