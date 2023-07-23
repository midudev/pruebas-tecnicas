import { Select } from "antd";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Book } from "../../types/books";
import '../../styles/global-variables.css'

type props = {
  setGenre: Dispatch<SetStateAction<string>>,
  genre: string
}

export default function GenreFilter({ setGenre, genre }: props): JSX.Element {

  const { bookList } = useContext(GlobalContext);
  const [ genres, setGenres ] = useState<string[]>([])

  useEffect(() => {
    setGenres(getGenres(bookList))
  }, [])

  return (
    <div>
      <label>Genre</label>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Select genre"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        allowClear={true}
        defaultValue={genre}
        value={genre}
        options={ genres.map(genre => Object.create({ value: genre, label: genre })) }
        onSelect={(value) => setGenre(value)}
        onClear={() => setGenre('All')}
      />
    </div>
  );
}

const getGenres = (bookList: Book[]): string[] => {
  let newGenres: string[] = ['All'];
    bookList.forEach((book) => {
      if(!newGenres.includes(book.genre)) newGenres.push(book.genre)
    })
  return newGenres;
}

