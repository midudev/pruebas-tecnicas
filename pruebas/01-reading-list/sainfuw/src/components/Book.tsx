import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IBook } from "../types";

export default function Book({ book }: { book: IBook }) {
  const [isClicked, setIsClicked] = useState(false);
  const [movePosition, setMovePosition] = useState({ x: 0, y: 0 })
  const bookElement = useRef<HTMLImageElement>(null);
  const { addToFavorites } = useContext(AppContext)

  const handleClick = () => {
    const favorites = document.getElementById('favorites')
    if (favorites == null) return

    favorites.style.display = 'flex'

    const position = bookElement.current?.getBoundingClientRect()
    if (position == null) return

    const favoritesPosition = favorites.getBoundingClientRect()
    if (favoritesPosition == null) return

    const x = favoritesPosition.x - Math.floor(position.x) + 14
    const y = favoritesPosition.y - Math.floor(position.y) + 50
    setMovePosition({ x, y })

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      addToFavorites(book)
    }, 1000)
  };

  return <li>
    <motion.img
      ref={bookElement}
      className="aspect-[3/4] rounded-lg border-2 border-gray-500 object-cover"
      src={book.cover}
      animate={{ x: isClicked ? movePosition.x : 0, y: isClicked ? movePosition.y : 0, scale: isClicked ? 1.15 : 1 }}
      transition={{ duration: 1 }}
      onClick={handleClick}
    />
  </li>
}