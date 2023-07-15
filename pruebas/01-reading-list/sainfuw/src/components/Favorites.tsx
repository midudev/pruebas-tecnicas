import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import FavoriteBook from "./FavoriteBook";

export default function Favorites() {
  const { favoriteBooks } = useContext(AppContext);

  return <aside id='favorites' className='max-w-[20%] min-w-[20%] items-center flex-col hidden'>
    <h1>Favorite Books</h1>
    <ul className="flex">
      {favoriteBooks.map((book) => <FavoriteBook key={book.title} book={book} />)}
    </ul>
  </aside>
}