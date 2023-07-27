import { Library } from "../../models/BooksModel";
interface Props {
  array: Library[];
  keyword?: string;
  pages?: number;
  genre?: string;
}

export const searchBooks = ({
  array,
  keyword = "",
  pages = 1500,
  genre = "",
}: Props) => {
  const SearchFilter = array.filter((books: Library) =>
    books.book.title.toLowerCase().trim().includes(keyword.toLowerCase().trim())
  ).filter((books: Library) => books.book.pages <= pages)

  // const genreFilter = genre === '' ? true : books.book.genre === genre
  // return genreFilter && books.book.title.toLowerCase().trim().includes(keyword.toLowerCase().trim())

  return SearchFilter;
};
