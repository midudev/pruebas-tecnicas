import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IBook } from "../types";

export default function Book({ book }: { book: IBook }) {
  const { favoriteBooks } = useContext(AppContext)
  const { removeFromFavorites } = useContext(AppContext)
  const [disabled, setDisabled] = useState(false)

  function handleClick() {
    setDisabled(true)
    removeFromFavorites(book)

    if (favoriteBooks.length <= 1) {
      document.getElementById('favorites')!.style.display = 'none'
    }
  }

  return (
    <li>
      <button onClick={handleClick} disabled={disabled}>
        <img src={book.cover} alt={book.title} className="aspect-[3/4] w-full rounded-lg border-2 border-gray-500 object-cover" />
      </button>
    </li>
  )

}