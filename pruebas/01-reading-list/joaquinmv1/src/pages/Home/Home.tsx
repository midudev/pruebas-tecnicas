import { useState } from "react";
import { useBooks } from "../../hooks";
import { Book } from "../../models/types";
import { Books, Search } from "../../sections";
import { Main } from "./";

export const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');
  const [pages, setPages] = useState(0);
  const { availableBooks } = useBooks();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const category = e.target.value;
    setCurrentCategory(category);
  };

  const handleChangePages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pages = parseInt(e.target.value);
    setPages(pages);
  }

  const filteredBooks: Book[] = availableBooks.filter(({ book }) => {
    return (
      book.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      (currentCategory === '' || book.genre === currentCategory) &&
      book.pages >= pages
    );
  });

  return (
    <>
      <Main>
        <Search
          handleChangeCategory={handleChangeCategory}
          handleChangeInput={handleChangeInput}
          searchValue={searchValue}
          handleChangePages={handleChangePages}
          pages={pages}
        />
        <Books
          newBooks={filteredBooks}
        />
      </Main>
    </>
  )
}