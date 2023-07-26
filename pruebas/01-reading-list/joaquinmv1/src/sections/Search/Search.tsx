import { SearchContainer } from ".";
import { BooksPages, SearchInput, SelectCategory } from "../../components";

interface SearchProps {
  handleChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePages: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  pages: number;
}

export const Search = ({ 
  handleChangeCategory, 
  handleChangeInput, 
  searchValue, 
  handleChangePages, 
  pages }: SearchProps) => {
  return (
    <>
      <SearchContainer>
        <SelectCategory
          changeCategory={handleChangeCategory}
        />
        <BooksPages
          handleChangePages={handleChangePages}
          pages={pages}
        />
        <SearchInput
          searchValue={searchValue}
          handleChangeInput={handleChangeInput}
        />
      </SearchContainer>
    </>
  )
}