import { ContainerInput, InputText } from '../../sections/Search';

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
          placeholder="Frankenstein, Juegos de tronos"
          value={searchValue}
          onChange={handleChangeInput}
        />
      </ContainerInput>
    </>
  )
}