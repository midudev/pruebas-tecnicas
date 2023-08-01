import { styled } from 'styled-components'
import { SearchIcon } from '../assets/Icons'

interface Props {
  search: string | number
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function SearchBar ({ search, onChangeSearch, handleSubmit }: Props) {
  return (
    <InputSearch onSubmit={handleSubmit}>
      <SearchIcon className='icon' width={25} height={25} />
      <input
        type="text"
        className='search'
        name='query'
        placeholder="Busca el nombre del libro..."
        value={search}
        onChange={onChangeSearch}
        autoComplete='off'
      />
    </InputSearch>
  )
}

const InputSearch = styled.form`
    position: relative;

  .search {
    background-color: transparent;
    width: 22rem;
    padding: 1rem 1rem 1rem 2.5rem;
    outline: none;
    opacity: 0.8;
    border-style: none;
    font-size: x-large;
    text-overflow: ellipsis;
    transition: all .2s ease-in-out;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: .1rem;
    transform: translate(0, -50%);
  }

  /* .search:focus {
    opacity: 1;
    width: 22rem;
  } */

`
