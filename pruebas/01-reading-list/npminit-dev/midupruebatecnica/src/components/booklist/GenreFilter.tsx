import { Select } from "antd";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Book } from "../../types/books";
import { DefaultOptionType } from "antd/es/select";

export default function GenreFilter(): JSX.Element {

  const { bookList, setBookList, resetBookList } = useContext(GlobalContext);
  const [ genres, setGenres ] = useState<string[]>([])

  const handleSelect = (genderSelected: string) => {
    resetBookList()
    setBookList(bookList => bookList.filter(book => book.genre === genderSelected))
  }

  useEffect(() => {
    setGenres(getGenres(bookList))
  }, [])

  useEffect(() => {
    console.log(genres)
  }, [ genres ])

  return (
    <Select
      showSearch
      style={{
        width: 200,
      }}
      placeholder="Select genre"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      allowClear={true}
      options={ genres.map(genre => Object.create({ value: genre, label: genre })) }
      onSelect={handleSelect}
      onClear={() => resetBookList()}
    />
  );
}

const getGenres = (bookList: Book[]): string[] => {
  let newGenres: string[] = [];
    bookList.forEach((book) => {
      if(!newGenres.includes(book.genre)) newGenres.push(book.genre)
    })
  return newGenres;
}

