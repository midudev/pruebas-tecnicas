// import { FaSearch } from 'react-icons/fa';
import { ContainerInput, InputText } from '../../sections/Search';
import { AiOutlineSearch } from 'react-icons/ai'

interface InputProps {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const SearchInput = ({ handleChangeInput, searchValue }: InputProps) => {
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <>
      <ContainerInput onSubmit={handleSubmit}>
        <InputText
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChangeInput}
        />
        <AiOutlineSearch style={{ position: "absolute", right: '15px', color: "#fff" }} />
      </ContainerInput>
    </>
  )
}