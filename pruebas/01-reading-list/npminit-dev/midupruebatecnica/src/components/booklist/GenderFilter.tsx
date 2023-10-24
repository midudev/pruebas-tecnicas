import { Col, Row, Select } from "antd";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import  { Typography } from "antd";
import { Book } from "../../types/books";
import '../../styles/global-variables.css'
import bookdata from '../../files/books'
import { getBooksArray } from "../contexts/GlobalContext";
const { Text } = Typography


type props = {
  setGenre: Dispatch<SetStateAction<string>>,
  genre: string
}

export default function GenreFilter({ setGenre, genre }: props): JSX.Element {

  const { colorMode } = useContext(GlobalContext);
  const [ genres, setGenres ] = useState<string[]>([])

  useEffect(() => {
    setGenres(getGenres(getBooksArray(bookdata)))
  }, [])

  return (
    <div>
      <Row justify={'space-between'} className={`${colorMode} GenderFilter-container`}>
        <Col span={6}>
          <Text>Gender</Text>
        </Col>
        <Col span={14}>
          <Select
            className={`${colorMode} GenderFilter-select`}
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
            popupClassName={`${colorMode}`}
          />
        </Col>  
      </Row>
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

