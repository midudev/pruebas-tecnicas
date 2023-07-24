import { Row, Col, Button, Collapse, CollapsePanelProps, CollapseProps, Space } from "antd";
import { FC, useContext, useEffect, useState } from "react";
import { Book } from "../../types/books";
import { GlobalContext, getBooksArray } from "../../contexts/GlobalContext";
import GenreFilter from "./GenreFilter";
import PagesNumFilter from "./PagesNumFilter";
import data from '../../files/books'
import '../../styles/global-variables.css'


export default function Filters(): JSX.Element {

  const { resetBookList, setBookList } = useContext(GlobalContext)

  const [genre, setGenre] = useState<string>('All');
  const [pagesRange, setPagesRange] = useState<number[]>([1, 2000])

  const applyFilters = (): Book[] => {
    let newBookList: Book[] = [...getBooksArray(data)]
    if(genre && pagesRange[0] > 0 && pagesRange[1] > 0) {
      newBookList = newBookList.filter(book => {
        if((book.genre === genre || genre === 'All') &&
          book.pages >= pagesRange[0] &&
          book.pages <= pagesRange[1]  
        ) return true
        else return false
      })
    } 
    return newBookList
  }

  const jsxContent: JSX.Element = (
    <Row style={{maxWidth: '400px'}}>
      <Space 
        direction="vertical" 
        size='small'>
        <Col span={24}>
          <GenreFilter 
            setGenre={setGenre}
            genre={genre}
          ></GenreFilter>
        </Col>
        <Col span={24}>
          <PagesNumFilter 
            setPagesRange={setPagesRange} 
            pagesRange={pagesRange}
          ></PagesNumFilter>
        </Col>
        <Col span={24}>          
          <Button
            onClick={() => setBookList(applyFilters())}
          >
            Apply
          </Button>
          <Button
            onClick={() => {
              resetBookList()
              setGenre('All')
              setPagesRange([1, 2000])
            }}
          >
            Clear filters
          </Button>
        </Col>
      </Space>
    </Row> 
    
  )

  return (
    <section>
      <Collapse 
        items={[
          { 
            key: '1',
            label: 'Show filters',
            children: jsxContent,
          }
        ]}
        bordered={false}  
        size="small"
        className="Collapse_Header"
      >  
      </Collapse> 
    </section>
  )
}