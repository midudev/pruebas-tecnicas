import { Col, Divider, Row, Space, Statistic } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import '../../styles/booklist/bookamount.css'
import '../../styles/global-variables.css'

export default function BookAmount(): JSX.Element {

  const { bookList, readList, colorMode } = useContext(GlobalContext)

  return (
    <Row>
      <Space direction="horizontal" size={'large'}>
        <Col>
          <Statistic 
            title="Availables" 
            value={
              bookList?.filter((book) => {
                return !readList?.some(interest => interest.ISBN === book.ISBN)
              }).length || 0
            } 
            suffix={ ` / ${(bookList?.length || 0)}` } 
            className={`${colorMode} Availables`}
          />
        </Col>
        <Col>
          <Statistic 
            title="On read list" 
            value={ readList?.filter(interest => 
              bookList.some(book => book.ISBN === interest.ISBN)   
            ).length || 0 } 
            suffix={ ` / ${ bookList?.length || 0 }` } 
            className={`${colorMode} OnReadList`}
          />
        </Col>
      </Space>
    </Row>
  )
}